const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Get all campaigns for a company
router.get('/', authenticateToken, async (req, res) => {
    try {
        const campaigns = await prisma.campaign.findMany({
            where: { companyId: req.user.companyId },
            include: {
                _count: {
                    select: { executions: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        res.json(campaigns);
    } catch (error) {
        console.error('Get campaigns error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
