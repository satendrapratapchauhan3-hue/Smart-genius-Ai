# AgentForge AI

A powerful AI-powered SaaS platform for creating intelligent business agents that automate sales, marketing, and customer support.

## 🚀 Features

- **AI Agent Builder**: Create custom AI agents for your business
- **Website Chat Widget**: Deploy AI agents on your website
- **CRM Lead Management**: Track and manage customer relationships
- **Workflow Automation**: Build automated business workflows
- **Omnichannel Messaging**: Connect across multiple communication channels
- **AI Content Generation**: Generate marketing content automatically
- **Email Marketing**: Create and manage email campaigns
- **Social Media Scheduler**: Plan and schedule social media posts
- **Analytics Dashboard**: Track performance and gain insights
- **AI Business Insights**: Get AI-powered business recommendations
- **Team Collaboration**: Work together with your team
- **API Integrations**: Connect with your favorite tools
- **Subscription Billing**: Flexible pricing plans
- **Admin Panel**: Complete platform management

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT
- **AI Integration**: OpenAI, Anthropic
- **Payments**: Stripe
- **Real-time**: Socket.io
- **Queue**: Bull with Redis

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Redis 6+

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agentforge-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Set up the database**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. **Start the development servers**
   ```bash
   # Terminal 1 - Frontend
   npm run dev

   # Terminal 2 - Backend
   npm run server:dev
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 📁 Project Structure

```
agentforge-ai/
├── app/                    # Next.js app directory
├── components/             # Reusable React components
├── lib/                    # Utility functions and configurations
├── server/                 # Backend Express server
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
├── types/                  # TypeScript type definitions
└── docs/                   # Documentation
```

## 🔧 Development

### Database Commands
```bash
npm run db:migrate    # Run database migrations
npm run db:generate   # Generate Prisma client
npm run db:seed       # Seed database with sample data
```

### Testing
```bash
npm run test          # Run tests
npm run test:watch    # Run tests in watch mode
```

### Building
```bash
npm run build         # Build for production
npm run start         # Start production server
```

## 📚 API Documentation

API documentation is available at `/api/docs` when running the development server.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, please contact support@agentforge.ai or create an issue in the repository.
