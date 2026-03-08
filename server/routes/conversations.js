const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Get all conversations for a company
router.get('/', authenticateToken, async (req, res) => {
  try {
    const conversations = await prisma.conversation.findMany({
      where: {
        agent: {
          companyId: req.user.companyId
        }
      },
      include: {
        agent: true,
        _count: {
          select: { messages: true }
        }
      },
      orderBy: { updatedAt: 'desc' }
    });

    res.json(conversations);
  } catch (error) {
    console.error('Get conversations error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get single conversation with messages
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const conversation = await prisma.conversation.findFirst({
      where: {
        id: req.params.id,
        agent: {
          companyId: req.user.companyId
        }
      },
      include: {
        agent: true,
        messages: {
          orderBy: { createdAt: 'asc' }
        }
      }
    });

    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    res.json(conversation);
  } catch (error) {
    console.error('Get conversation error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
