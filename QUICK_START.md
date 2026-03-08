# 🚀 AgentForge AI - Quick Start Guide

## ⚡ 5 Minutes to Running Platform

### 1️⃣ Install Dependencies
```bash
git clone <repository-url>
cd agentforge-ai
npm install
```

### 2️⃣ Setup Environment
```bash
cp .env.example .env
# Edit .env file (minimum required):
DATABASE_URL="postgresql://username:password@localhost:5432/agentforge_ai"
JWT_SECRET="your-secret-key-here"
```

### 3️⃣ Setup Database
```bash
# Create database in PostgreSQL
createdb agentforge_ai

# Run migrations
npm run db:generate
npm run db:migrate
```

### 4️⃣ Start Platform
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server:dev
```

### 5️⃣ Access Platform
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001

## 🎯 First Steps

1. **Register Account**: Go to http://localhost:3000 and sign up
2. **Create Company**: Set up your organization
3. **Build Agent**: Create your first AI agent
4. **Test Agent**: Chat with your AI agent
5. **Deploy**: Add agent to your website

## 📱 What You Get

- ✅ Complete SaaS platform
- ✅ AI agent builder
- ✅ Dashboard with analytics
- ✅ User authentication
- ✅ Database with all tables
- ✅ Modern UI/UX design
- ✅ REST API backend
- ✅ Real-time features

## 🔧 Need Help?

- Check `SETUP_GUIDE.md` for detailed instructions
- Check `INSTALLATION_COMMANDS.md` for copy-paste commands
- Review error logs in terminal
- Verify all services are running

## 🎉 Ready to Use!

Your AgentForge AI platform is now running and ready for business! 🚀

Start building intelligent AI agents for your business automation needs.
