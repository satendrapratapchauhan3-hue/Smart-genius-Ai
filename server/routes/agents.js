const express = require('express');
const Joi = require('joi');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken, requireCompanyAccess } = require('../middleware/auth');
const { generateAIResponse } = require('../utils/ai');

const router = express.Router();
const prisma = new PrismaClient();

// Validation schemas
const createAgentSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  description: Joi.string().max(500).optional(),
  type: Joi.string().valid('SALES', 'MARKETING', 'SUPPORT', 'GENERAL').required(),
  config: Joi.object().required(),
  capabilities: Joi.array().items(Joi.string()).required()
});

const updateAgentSchema = Joi.object({
  name: Joi.string().min(1).max(100).optional(),
  description: Joi.string().max(500).optional(),
  status: Joi.string().valid('ACTIVE', 'INACTIVE', 'TRAINING', 'ERROR').optional(),
  config: Joi.object().optional(),
  capabilities: Joi.array().items(Joi.string()).optional()
});

// Get all agents for a company
router.get('/', authenticateToken, requireCompanyAccess, async (req, res) => {
  try {
    const { page = 1, limit = 10, type, status } = req.query;
    const skip = (page - 1) * limit;

    const where = {
      companyId: req.companyId,
      ...(type && { type }),
      ...(status && { status })
    };

    const [agents, total] = await Promise.all([
      prisma.agent.findMany({
        where,
        include: {
          creator: {
            select: { id: true, firstName: true, lastName: true, email: true }
          },
          _count: {
            select: {
              conversations: true,
              deployments: true
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip: parseInt(skip),
        take: parseInt(limit)
      }),
      prisma.agent.count({ where })
    ]);

    res.json({
      agents,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get agents error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get single agent
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const agent = await prisma.agent.findFirst({
      where: {
        id: req.params.id,
        companyId: req.user.companyId
      },
      include: {
        creator: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        deployments: true,
        conversations: {
          take: 10,
          orderBy: { createdAt: 'desc' },
          include: {
            _count: { select: { messages: true } }
          }
        }
      }
    });

    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    res.json(agent);
  } catch (error) {
    console.error('Get agent error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create agent
router.post('/', authenticateToken, requireCompanyAccess, async (req, res) => {
  try {
    const { error } = createAgentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { name, description, type, config, capabilities } = req.body;

    const agent = await prisma.agent.create({
      data: {
        name,
        description,
        type,
        config,
        capabilities,
        companyId: req.companyId,
        createdBy: req.user.id
      },
      include: {
        creator: {
          select: { id: true, firstName: true, lastName: true, email: true }
        }
      }
    });

    // Emit real-time update
    const io = req.app.get('io');
    io.to(`company-${req.companyId}`).emit('agent-created', agent);

    res.status(201).json({
      message: 'Agent created successfully',
      agent
    });
  } catch (error) {
    console.error('Create agent error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update agent
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { error } = updateAgentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Check if agent exists and user has access
    const existingAgent = await prisma.agent.findFirst({
      where: {
        id: req.params.id,
        companyId: req.user.companyId
      }
    });

    if (!existingAgent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    const updateData = req.body;
    const agent = await prisma.agent.update({
      where: { id: req.params.id },
      data: updateData,
      include: {
        creator: {
          select: { id: true, firstName: true, lastName: true, email: true }
        }
      }
    });

    // Emit real-time update
    const io = req.app.get('io');
    io.to(`company-${req.user.companyId}`).emit('agent-updated', agent);

    res.json({
      message: 'Agent updated successfully',
      agent
    });
  } catch (error) {
    console.error('Update agent error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete agent
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const agent = await prisma.agent.findFirst({
      where: {
        id: req.params.id,
        companyId: req.user.companyId
      }
    });

    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    await prisma.agent.delete({
      where: { id: req.params.id }
    });

    // Emit real-time update
    const io = req.app.get('io');
    io.to(`company-${req.user.companyId}`).emit('agent-deleted', { id: req.params.id });

    res.json({ message: 'Agent deleted successfully' });
  } catch (error) {
    console.error('Delete agent error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Deploy agent
router.post('/:id/deploy', authenticateToken, async (req, res) => {
  try {
    const { type, config } = req.body;

    if (!type || !config) {
      return res.status(400).json({ message: 'Deployment type and config required' });
    }

    const agent = await prisma.agent.findFirst({
      where: {
        id: req.params.id,
        companyId: req.user.companyId
      }
    });

    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    const deployment = await prisma.agentDeployment.create({
      data: {
        agentId: req.params.id,
        type,
        config,
        status: 'ACTIVE',
        url: type === 'WEBSITE_WIDGET' ? `https://widget.agentforge.ai/${req.params.id}` : null
      }
    });

    res.status(201).json({
      message: 'Agent deployed successfully',
      deployment
    });
  } catch (error) {
    console.error('Deploy agent error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Test agent
router.post('/:id/test', authenticateToken, async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'Message required' });
    }

    const agent = await prisma.agent.findFirst({
      where: {
        id: req.params.id,
        companyId: req.user.companyId
      }
    });

    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    // Generate AI response
    const response = await generateAIResponse({
      agentConfig: agent.config,
      message,
      context: agent.capabilities
    });

    res.json({
      message: 'Test completed',
      response
    });
  } catch (error) {
    console.error('Test agent error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get agent analytics
router.get('/:id/analytics', authenticateToken, async (req, res) => {
  try {
    const { period = '7d' } = req.query;

    const agent = await prisma.agent.findFirst({
      where: {
        id: req.params.id,
        companyId: req.user.companyId
      }
    });

    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    // Get analytics data
    const analytics = await prisma.analytics.findMany({
      where: {
        agentId: req.params.id,
        type: 'AGENT_PERFORMANCE',
        period
      },
      orderBy: { createdAt: 'desc' },
      take: 30
    });

    // Get conversation stats
    const conversationStats = await prisma.conversation.aggregate({
      where: {
        agentId: req.params.id,
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        }
      },
      _count: { id: true },
      _avg: {
        // This would need custom aggregation for message count
      }
    });

    res.json({
      analytics,
      stats: {
        totalConversations: conversationStats._count.id,
        period
      }
    });
  } catch (error) {
    console.error('Get agent analytics error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
