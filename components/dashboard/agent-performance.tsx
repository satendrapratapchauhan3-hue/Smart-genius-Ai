'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, Clock, MessageSquare, TrendingUp } from 'lucide-react'

const agents = [
  {
    name: 'Sales Assistant',
    conversations: 342,
    avgResponseTime: '2.3s',
    satisfaction: 96,
    trend: 'up',
  },
  {
    name: 'Support Bot',
    conversations: 289,
    avgResponseTime: '1.8s',
    satisfaction: 92,
    trend: 'up',
  },
  {
    name: 'Marketing Helper',
    conversations: 156,
    avgResponseTime: '3.1s',
    satisfaction: 88,
    trend: 'down',
  },
  {
    name: 'Lead Qualifier',
    conversations: 198,
    avgResponseTime: '2.7s',
    satisfaction: 94,
    trend: 'stable',
  },
]

export function AgentPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BarChart3 className="h-5 w-5 mr-2" />
          Agent Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {agents.map((agent) => (
            <div key={agent.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{agent.name}</h4>
                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                  <span className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {agent.conversations}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {agent.avgResponseTime}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-gray-900">{agent.satisfaction}%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
