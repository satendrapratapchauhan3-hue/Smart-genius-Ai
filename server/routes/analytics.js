const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Get analytics overview
router.get('/overview', authenticateToken, async (req, res) => {
    try {
        const { period = '7d' } = req.query;

        const analytics = await prisma.analytics.findMany({
            where: {
                companyId: req.user.companyId,
                period
            },
            orderBy: { createdAt: 'desc' },
            take: 100
        });

        res.json(analytics);
    } catch (error) {
        console.error('Get analytics error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
