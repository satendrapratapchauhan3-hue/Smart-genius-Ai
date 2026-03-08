# ⚡ Quick Installation Commands

## 🚀 One-Click Setup (Copy & Paste)

### Step 1: Clone and Install
```bash
git clone <repository-url>
cd agentforge-ai
npm install
```

### Step 2: Environment Setup
```bash
cp .env.example .env
# Edit .env file with your credentials
```

### Step 3: Database Setup
```bash
# Create PostgreSQL database
createdb agentforge_ai

# Run migrations
npm run db:generate
npm run db:migrate
npm run db:seed
```

### Step 4: Start Services
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend  
npm run server:dev
```

## 🔧 Prerequisites Installation

### Windows
```powershell
# Install Node.js
# Download from https://nodejs.org

# Install PostgreSQL
# Download from https://www.postgresql.org/download/windows/

# Install Redis
# Download from https://redis.io/download

# Verify installations
node --version
psql --version
redis-cli ping
```

### macOS
```bash
# Install Homebrew if not installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install dependencies
brew install node postgresql redis

# Start services
brew services start postgresql
brew services start redis

# Create database
createdb agentforge_ai
```

### Linux (Ubuntu/Debian)
```bash
# Update packages
sudo apt update

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Install Redis
sudo apt install redis-server
sudo systemctl start redis-server
sudo systemctl enable redis-server

# Create database
sudo -u postgres createdb agentforge_ai
```

## 🌐 Access URLs

After starting the services:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/health
- **Database Studio**: `npx prisma studio`

## 🧪 Quick Tests

```bash
# Test backend health
curl http://localhost:3001/health

# Test database connection
npx prisma db pull

# Test Redis connection
redis-cli ping
```

## 📱 Mobile Access

Use your phone and visit:
- **Frontend**: http://YOUR_COMPUTER_IP:3000
- **Backend**: http://YOUR_COMPUTER_IP:3001

## 🔍 Troubleshooting Commands

```bash
# Check running processes
netstat -tulpn | grep :3000
netstat -tulpn | grep :3001

# Kill processes on ports
sudo fuser -k 3000/tcp
sudo fuser -k 3001/tcp

# Reset database
npm run db:migrate --force

# Clear cache
npm cache clean --force
rm -rf .next
rm -rf node_modules
npm install
```

## 🎯 Done! 

Your AgentForge AI platform is now running! 🚀

Visit http://localhost:3000 to get started.
