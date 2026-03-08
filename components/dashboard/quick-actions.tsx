'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bot, MessageSquare, Plus, Settings } from 'lucide-react'

const actions = [
  {
    title: 'Create New Agent',
    description: 'Build a custom AI agent for your business',
    icon: Bot,
    action: 'Create Agent',
    href: '/dashboard/agents/new',
  },
  {
    title: 'View Conversations',
    description: 'Monitor and analyze agent interactions',
    icon: MessageSquare,
    action: 'View All',
    href: '/dashboard/conversations',
  },
  {
    title: 'Configure Settings',
    description: 'Manage your account and preferences',
    icon: Settings,
    action: 'Settings',
    href: '/dashboard/settings',
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {actions.map((action) => (
          <div key={action.title} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0">
              <action.icon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900">{action.title}</h4>
              <p className="text-sm text-gray-600">{action.description}</p>
            </div>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-1" />
              {action.action}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
