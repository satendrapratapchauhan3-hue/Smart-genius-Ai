@echo off
echo 🔧 AgentForge AI - Localhost Fix Script
echo =======================================

echo 1. Checking Docker...
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker not found - Please install Docker Desktop
    pause
    exit /b 1
)
echo ✅ Docker found

echo 2. Checking Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found - Please install Node.js
    pause
    exit /b 1
)
echo ✅ Node.js found

echo 3. Cleaning up...
docker stop postgres-agentforge redis-agentforge 2>nul
docker rm postgres-agentforge redis-agentforge 2>nul
rmdir /s /q node_modules 2>nul
rmdir /s /q .next 2>nul

echo 4. Installing dependencies...
npm install

echo 5. Setting up databases...
docker run -d --name postgres-agentforge -e POSTGRES_DB=agentforge_ai -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=agentforge123 -p 5432:5432 postgres:latest
docker run -d --name redis-agentforge -p 6379:6379 redis:latest

echo 6. Setting up environment...
if exist .env.docker (
    copy .env.docker .env
    echo ✅ Environment configured
) else (
    echo ❌ .env.docker not found
    echo Creating basic .env file...
    echo DATABASE_URL="postgresql://postgres:agentforge123@localhost:5432/agentforge_ai" > .env
    echo REDIS_URL="redis://localhost:6379" >> .env
    echo JWT_SECRET="your-super-secret-jwt-key" >> .env
)

echo 7. Waiting for databases...
timeout /t 15 /nobreak >nul

echo 8. Setting up database...
npm run db:generate
npm run db:migrate

echo 9. Testing connections...
curl -s http://localhost:3001/health >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Backend responding
) else (
    echo ❌ Backend not responding yet
)

echo.
echo 🚀 Setup complete! Now run:
echo Terminal 1: npm run dev
echo Terminal 2: npm run server:dev
echo.
echo Access: http://localhost:3000
pause
