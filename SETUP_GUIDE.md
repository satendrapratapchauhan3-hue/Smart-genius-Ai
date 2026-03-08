# 🚀 AgentForge AI - Complete Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** (v18.0.0 or higher)
- **PostgreSQL** (v14.0 or higher)
- **Redis** (v6.0 or higher)
- **Git** (for version control)

### Development Tools (Recommended)
- **VS Code** (or your preferred IDE)
- **Postman** (for API testing)
- **pgAdmin** (for database management)
- **Redis Desktop Manager** (for Redis management)

## 🛠️ Installation Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd agentforge-ai
```

### 2. Install Dependencies
```bash
# Install all frontend and backend dependencies
npm install
```

### 3. Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Edit the .env file with your configuration
# Use VS Code or your preferred editor
code .env
```

### 4. Environment Variables Configuration
Update your `.env` file with the following:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/agentforge_ai"

# JWT
JWT_SECRET="your-super-secret-jwt-key-here-change-this-in-production"
JWT_EXPIRES_IN="7d"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"

# API Keys (Get these from respective services)
OPENAI_API_KEY="your-openai-api-key"
ANTHROPIC_API_KEY="your-anthropic-api-key"

# Email (Gmail example)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Stripe (Get from Stripe Dashboard)
STRIPE_PUBLISHABLE_KEY="pk_test_your-stripe-publishable-key"
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="whsec_your-webhook-secret"

# Redis
REDIS_URL="redis://localhost:6379"

# File Upload
UPLOAD_DIR="./uploads"
MAX_FILE_SIZE="10485760"

# Social Media APIs (Optional)
TWITTER_API_KEY="your-twitter-api-key"
TWITTER_API_SECRET="your-twitter-api-secret"
FACEBOOK_APP_ID="your-facebook-app-id"
LINKEDIN_CLIENT_ID="your-linkedin-client-id"

# Google (Optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# App Settings
APP_NAME="AgentForge AI"
APP_URL="http://localhost:3000"
API_URL="http://localhost:3001"
```

### 5. Database Setup

#### Create PostgreSQL Database
```sql
-- Connect to PostgreSQL and create database
CREATE DATABASE agentforge_ai;

-- Create user (optional, for better security)
CREATE USER agentforge_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE agentforge_ai TO agentforge_user;
```

#### Run Database Migrations
```bash
# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Seed database with sample data (optional)
npm run db:seed
```

### 6. Redis Setup
```bash
# Start Redis server (Windows)
redis-server

# Or use Docker
docker run -d -p 6379:6379 redis:latest
```

## 🚀 Starting the Application

### Development Mode
Open two terminal windows:

**Terminal 1 - Frontend (Next.js)**
```bash
npm run dev
```
Frontend will run on: `http://localhost:3000`

**Terminal 2 - Backend (Express)**
```bash
npm run server:dev
```
Backend API will run on: `http://localhost:3001`

### Production Mode
```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📁 Project Structure Overview

```
agentforge-ai/
├── app/                          # Next.js App Router
│   ├── dashboard/               # Main dashboard pages
│   │   ├── agents/             # AI agent management
│   │   ├── conversations/      # Chat interface
│   │   ├── workflows/          # Automation workflows
│   │   ├── analytics/          # Analytics dashboard
│   │   └── campaigns/          # Marketing campaigns
│   ├── layout.tsx              # Root layout component
│   ├── page.tsx                # Landing page
│   ├── providers.tsx           # React Query providers
│   └── globals.css             # Global styles
├── components/                  # Reusable components
│   ├── ui/                     # Base UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── dashboard/              # Dashboard components
│       ├── sidebar.tsx
│       ├── header.tsx
│       ├── overview-cards.tsx
│       └── ...
├── server/                      # Backend server
│   ├── index.js                # Server entry point
│   ├── routes/                 # API routes
│   │   ├── auth.js             # Authentication endpoints
│   │   ├── agents.js           # Agent management
│   │   ├── conversations.js    # Chat endpoints
│   │   └── ...
│   ├── middleware/             # Express middleware
│   │   └── auth.js             # Authentication middleware
│   └── utils/                  # Helper functions
├── prisma/                      # Database files
│   ├── schema.prisma           # Database schema
│   ├── migrations/             # Migration files
│   └── seed.js                 # Database seeding
├── lib/                         # Utility functions
│   └── utils.ts                # Common utilities
├── types/                       # TypeScript definitions
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS config
└── .env.example                # Environment template
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start Next.js frontend
npm run server:dev       # Start Express backend
npm run server           # Start backend in production

# Database
npm run db:migrate       # Run database migrations
npm run db:generate      # Generate Prisma client
npm run db:seed          # Seed database with sample data

# Building
npm run build            # Build for production
npm run start            # Start production server

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode

# Linting
npm run lint             # Run ESLint
```

## 🌐 Access Points

Once running, you can access:

- **Frontend Application**: http://localhost:3000
- **API Documentation**: http://localhost:3001/api/docs
- **Health Check**: http://localhost:3001/health
- **Database Admin**: http://localhost:3001/admin (if enabled)

## 🧪 Testing the Setup

### 1. Test Frontend
- Open http://localhost:3000 in your browser
- You should see the AgentForge AI landing page

### 2. Test Backend API
```bash
# Test health endpoint
curl http://localhost:3001/health

# Expected response:
# {"status":"OK","timestamp":"2024-01-01T00:00:00.000Z"}
```

### 3. Test Database Connection
```bash
# Check if database tables were created
npx prisma db pull

# View database schema
npx prisma studio
```

## 🚨 Common Issues & Solutions

### Database Connection Issues
```bash
# Check PostgreSQL is running
pg_isready

# Check database exists
psql -h localhost -U postgres -l

# Reset database if needed
npm run db:migrate --force
```

### Port Conflicts
```bash
# Check what's running on ports 3000 and 3001
netstat -tulpn | grep :3000
netstat -tulpn | grep :3001

# Kill processes if needed
kill -9 <PID>
```

### Redis Connection
```bash
# Test Redis connection
redis-cli ping

# Should return: PONG
```

### Environment Variables
```bash
# Verify .env file exists
ls -la .env

# Check for missing variables
grep -v "^#" .env | grep -v "^$"
```

## 📱 Development Workflow

### 1. Making Changes
- Frontend changes in `app/` directory
- Backend changes in `server/` directory
- Database changes in `prisma/schema.prisma`

### 2. Database Changes
```bash
# 1. Update schema.prisma
# 2. Generate migration
npx prisma migrate dev --name migration-name

# 3. Update client
npm run db:generate
```

### 3. Adding New Pages
```bash
# Create new page in app/dashboard/
# Example: app/dashboard/settings/page.tsx
```

### 4. Adding New API Endpoints
```bash
# Create new route in server/routes/
# Example: server/routes/settings.js
```

## 🔒 Security Considerations

### Production Environment
1. **Change all secrets** in .env file
2. **Use HTTPS** with SSL certificates
3. **Enable CORS** for your domain only
4. **Set up firewall** rules
5. **Use environment variables** for sensitive data
6. **Enable database backups**
7. **Set up monitoring** and logging

### Environment Variables Security
```bash
# Generate secure JWT secret
openssl rand -base64 32

# Use strong database passwords
# Store secrets in environment, not code
```

## 🚀 Deployment

### Option 1: Vercel (Frontend) + Railway/Heroku (Backend)
```bash
# Deploy frontend to Vercel
vercel

# Deploy backend to Railway
railway login
railway init
railway up
```

### Option 2: Docker Deployment
```bash
# Build Docker images
docker build -t agentforge-frontend .
docker build -t agentforge-backend .

# Run with Docker Compose
docker-compose up -d
```

### Option 3: VPS Deployment
```bash
# Install Node.js, PostgreSQL, Redis
# Clone repository
# Install dependencies
# Set up PM2 for process management
pm2 start ecosystem.config.js
```

## 📞 Support & Troubleshooting

### Getting Help
1. Check this guide first
2. Review error logs in terminal
3. Check browser console for frontend errors
4. Verify all environment variables are set
5. Ensure all services are running

### Common Error Messages
- **"Database connection failed"**: Check DATABASE_URL and PostgreSQL status
- **"JWT secret not set"**: Add JWT_SECRET to .env file
- **"Port already in use"**: Kill existing processes or change ports
- **"Module not found"**: Run `npm install` to install dependencies

### Debug Mode
```bash
# Enable debug logging
DEBUG=* npm run dev

# Database queries
DEBUG=prisma:query npm run dev
```

## 🎉 You're Ready!

Once you've completed these steps, you should have a fully functional AgentForge AI platform running locally. You can now:

1. **Register a new account** at http://localhost:3000
2. **Create your first AI agent** in the dashboard
3. **Test the API endpoints** with Postman
4. **Explore the features** and start building your AI automation!

Happy coding! 🚀
