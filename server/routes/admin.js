const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Middleware to check for super admin
const requireAdmin = async (req, res, next) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.userId }
        });

        if (user.role !== 'SUPER_ADMIN') {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get stats
router.get('/stats', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const [users, companies, agents] = await Promise.all([
            prisma.user.count(),
            prisma.company.count(),
            prisma.agent.count()
        ]);

        res.json({ users, companies, agents });
    } catch (error) {
        console.error('Get admin stats error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
