# 🐳 Docker Commands for AgentForge AI

## Database Setup Commands

### PostgreSQL Container
```bash
docker run -d \
  --name postgres-agentforge \
  -e POSTGRES_DB=agentforge_ai \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=agentforge123 \
  -p 5432:5432 \
  postgres:latest
```

### Redis Container
```bash
docker run -d \
  --name redis-agentforge \
  -p 6379:6379 \
  redis:latest
```

### Both Containers Together
```bash
# Start PostgreSQL
docker run -d --name postgres-agentforge -e POSTGRES_DB=agentforge_ai -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=agentforge123 -p 5432:5432 postgres:latest

# Start Redis
docker run -d --name redis-agentforge -p 6379:6379 redis:latest
```

## Management Commands

### Check Running Containers
```bash
docker ps
```

### Stop Containers
```bash
docker stop postgres-agentforge redis-agentforge
```

### Start Containers
```bash
docker start postgres-agentforge redis-agentforge
```

### Remove Containers
```bash
docker rm postgres-agentforge redis-agentforge
```

### View Logs
```bash
docker logs postgres-agentforge
docker logs redis-agentforge
```

## Environment Variables
Add this to your .env file:
```
DATABASE_URL="postgresql://postgres:agentforge123@localhost:5432/agentforge_ai"
REDIS_URL="redis://localhost:6379"
JWT_SECRET="your-super-secret-jwt-key-change-this"
```

## Test Connections
```bash
# Test PostgreSQL
docker exec -it postgres-agentforge psql -U postgres -d agentforge_ai

# Test Redis
docker exec -it redis-agentforge redis-cli ping
```
