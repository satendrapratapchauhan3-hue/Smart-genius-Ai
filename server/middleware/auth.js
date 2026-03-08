const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if session exists and is valid
    const session = await prisma.session.findUnique({
      where: { token },
      include: { user: true }
    });

    if (!session || session.expiresAt < new Date()) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    // Update last used time
    await prisma.session.update({
      where: { id: session.id },
      data: { lastUsedAt: new Date() }
    });

    req.user = session.user;
    req.session = session;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

const requireRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    next();
  };
};

const requireSubscription = (plans) => {
  return async (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const subscription = await prisma.subscription.findUnique({
      where: { userId: req.user.id }
    });

    if (!subscription || !plans.includes(subscription.plan)) {
      return res.status(403).json({ message: 'Subscription plan required' });
    }

    req.subscription = subscription;
    next();
  };
};

const requireCompanyAccess = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  const companyId = req.params.companyId || req.body.companyId;
  
  if (!companyId) {
    return res.status(400).json({ message: 'Company ID required' });
  }

  // Check if user has access to the company
  const teamMember = await prisma.teamMember.findFirst({
    where: {
      userId: req.user.id,
      companyId: companyId
    }
  });

  if (!teamMember && req.user.companyId !== companyId) {
    return res.status(403).json({ message: 'Access to company denied' });
  }

  req.companyId = companyId;
  next();
};

module.exports = {
  authenticateToken,
  requireRole,
  requireSubscription,
  requireCompanyAccess
};
