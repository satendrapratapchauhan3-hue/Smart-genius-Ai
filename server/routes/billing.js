const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Get billing info and invoices
router.get('/', authenticateToken, async (req, res) => {
    try {
        const billing = await prisma.billing.findUnique({
            where: { companyId: req.user.companyId },
            include: {
                invoices: {
                    orderBy: { createdAt: 'desc' },
                    take: 12
                }
            }
        });

        res.json(billing);
    } catch (error) {
        console.error('Get billing error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
