const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Get all integrations for a company
router.get('/', authenticateToken, async (req, res) => {
    try {
        const integrations = await prisma.integration.findMany({
            where: { companyId: req.user.companyId },
            orderBy: { name: 'asc' }
        });

        res.json(integrations);
    } catch (error) {
        console.error('Get integrations error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
