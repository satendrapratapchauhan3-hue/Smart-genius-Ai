'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bot, MessageSquare, User, Clock } from 'lucide-react'

const activities = [
  {
    id: 1,
    type: 'conversation',
    agent: 'Sales Assistant',
    user: 'John Smith',
    message: 'Successfully qualified a new lead',
    time: '2 minutes ago',
    icon: MessageSquare,
  },
  {
    id: 2,
    type: 'agent_created',
    agent: 'Support Bot v2',
    user: 'Sarah Johnson',
    message: 'Created new AI agent for customer support',
    time: '15 minutes ago',
    icon: Bot,
  },
  {
    id: 3,
    type: 'conversation',
    agent: 'Marketing Helper',
    user: 'Mike Davis',
    message: 'Generated email campaign content',
    time: '1 hour ago',
    icon: MessageSquare,
  },
  {
    id: 4,
    type: 'user_added',
    agent: null,
    user: 'Admin',
    message: 'Added new team member: Emma Wilson',
    time: '2 hours ago',
    icon: User,
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <activity.icon className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.user}</span>
                  {activity.agent && (
                    <span>
                      {' '}
                      with <span className="font-medium">{activity.agent}</span>
                    </span>
                  )}{' '}
                  {activity.message}
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
