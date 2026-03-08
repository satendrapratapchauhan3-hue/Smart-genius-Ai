#!/bin/bash

echo "🚀 AgentForge AI - Database Setup Script"
echo "========================================"

# Check if Docker is installed
if command -v docker &> /dev/null; then
    echo "✅ Docker found - Using Docker for setup"
    
    echo "🔴 Starting PostgreSQL..."
    docker run -d \
      --name postgres-agentforge \
      -e POSTGRES_DB=agentforge_ai \
      -e POSTGRES_USER=postgres \
      -e POSTGRES_PASSWORD=agentforge123 \
      -p 5432:5432 \
      postgres:latest
    
    echo "🔴 Starting Redis..."
    docker run -d \
      --name redis-agentforge \
      -p 6379:6379 \
      redis:latest
    
    echo "⏳ Waiting for databases to start..."
    sleep 10
    
    echo "✅ Databases started successfully!"
    echo "📝 Add this to your .env file:"
    echo "DATABASE_URL=\"postgresql://postgres:agentforge123@localhost:5432/agentforge_ai\""
    echo "REDIS_URL=\"redis://localhost:6379\""
    
else
    echo "❌ Docker not found"
    echo "📦 Please install Docker from: https://www.docker.com/products/docker-desktop"
    echo "🔧 Or follow manual setup instructions in SETUP_GUIDE.md"
fi

echo ""
echo "🧪 Testing connections..."
echo "PostgreSQL: psql -h localhost -U postgres -d agentforge_ai"
echo "Redis: redis-cli ping"
