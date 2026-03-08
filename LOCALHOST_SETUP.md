# 🚀 AgentForge AI - Complete Localhost Setup Guide

## ⚡ Quick Fix - Run These Commands

### Step 1: Dependencies Install Karo
```bash
# Project folder mein jao
cd "c:\Users\chauh\OneDrive\Documents\Desktop\SmartGenius AI"

# Cache clean karo
npm cache clean --force

# Dependencies install karo
npm install
```

### Step 2: Environment Setup
```bash
# .env file create karo
copy .env.docker .env

# Ya manually create karo:
echo DATABASE_URL="postgresql://postgres:agentforge123@localhost:5432/agentforge_ai" > .env
echo REDIS_URL="redis://localhost:6379" >> .env
echo JWT_SECRET="your-super-secret-jwt-key" >> .env
```

### Step 3: Docker Databases Start Karo
```bash
# PostgreSQL container
docker run -d --name postgres-agentforge -e POSTGRES_DB=agentforge_ai -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=agentforge123 -p 5432:5432 postgres:latest

# Redis container
docker run -d --name redis-agentforge -p 6379:6379 redis:latest

# Check containers running hain
docker ps
```

### Step 4: Database Setup
```bash
# Wait 10 seconds
timeout /t 10

# Prisma client generate karo
npm run db:generate

# Database migrations run karo
npm run db:migrate
```

### Step 5: Platform Start Karo
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend (alag terminal mein)
npm run server:dev
```

### Step 6: Access Platform
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001
- **Health Check**: http://localhost:3001/health

## 🔧 Common Problems & Solutions

### Problem 1: "Cannot find module"
```bash
rm -rf node_modules
npm install
```

### Problem 2: "Database connection failed"
```bash
# Check Docker
docker ps

# Restart containers
docker restart postgres-agentforge redis-agentforge
```

### Problem 3: "Port already in use"
```bash
# Kill processes
npx kill-port 3000
npx kill-port 3001
```

### Problem 4: "Module not found"
```bash
# Dependencies reinstall karo
npm install
```

## 🧪 Testing

```bash
# Backend test
curl http://localhost:3001/health

# Frontend browser mein open karo
http://localhost:3000
```

## 🎯 Success Indicators

✅ Backend: http://localhost:3001/health par `{"status":"OK"}`
✅ Frontend: http://localhost:3000 par website dikhe
✅ Database: Prisma client generate successfully
✅ Docker: Both containers running

## 🚨 Troubleshooting

Agar kuch bhi error aaye to:
1. **Console error message copy karo**
2. **Docker status check karo**: `docker ps`
3. **Port check karo**: `netstat -tulpn | grep :3000`
4. **Dependencies reinstall karo**: `rm -rf node_modules && npm install`

## 💡 Pro Tips

- **Always 2 terminals open rakho**: 1 for frontend, 1 for backend
- **Docker Desktop running hona chahiye**
- **.env file properly configured honi chahiye**
- **Database containers start hone ke baad hi migrate karo**

## 📱 Mobile Access

Computer aur mobile same WiFi mein:
1. Computer IP pata karo: `ipconfig`
2. Mobile browser mein: `http://COMPUTER_IP:3000`

**Ready to use! 🎉**
