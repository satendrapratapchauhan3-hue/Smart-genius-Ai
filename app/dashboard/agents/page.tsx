import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bot, MessageSquare, TrendingUp, Plus, Settings } from 'lucide-react'

const agents = [
  {
    id: '1',
    name: 'Sales Assistant',
    type: 'SALES',
    status: 'ACTIVE',
    conversations: 342,
    satisfaction: 96,
    lastActive: '2 hours ago',
  },
  {
    id: '2',
    name: 'Support Bot',
    type: 'SUPPORT',
    status: 'ACTIVE',
    conversations: 289,
    satisfaction: 92,
    lastActive: '5 minutes ago',
  },
  {
    id: '3',
    name: 'Marketing Helper',
    type: 'MARKETING',
    status: 'TRAINING',
    conversations: 156,
    satisfaction: 88,
    lastActive: '1 day ago',
  },
]

export default function AgentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Agents</h1>
          <p className="text-gray-600">Manage and configure your intelligent business agents</p>
        </div>
        <Link href="/dashboard/agents/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Agent
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <Card key={agent.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">{agent.name}</CardTitle>
                  <p className="text-sm text-gray-600">{agent.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`h-2 w-2 rounded-full ${
                  agent.status === 'ACTIVE' ? 'bg-green-500' : 
                  agent.status === 'TRAINING' ? 'bg-yellow-500' : 'bg-gray-500'
                }`} />
                <span className="text-sm text-gray-600">{agent.status}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Conversations</span>
                  <span className="font-medium">{agent.conversations}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Satisfaction</span>
                  <span className="font-medium">{agent.satisfaction}%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last Active</span>
                  <span className="font-medium">{agent.lastActive}</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Chat
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
