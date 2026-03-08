'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bot, MessageSquare, TrendingUp, Users } from 'lucide-react'

const stats = [
  {
    title: 'Active Agents',
    value: '12',
    change: '+2 from last month',
    changeType: 'positive',
    icon: Bot,
  },
  {
    title: 'Total Conversations',
    value: '3,842',
    change: '+12% from last week',
    changeType: 'positive',
    icon: MessageSquare,
  },
  {
    title: 'Success Rate',
    value: '94.2%',
    change: '+3.1% from last month',
    changeType: 'positive',
    icon: TrendingUp,
  },
  {
    title: 'Team Members',
    value: '8',
    change: 'No change',
    changeType: 'neutral',
    icon: Users,
  },
]

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <p className="text-xs text-gray-600 mt-1">
              <span
                className={
                  stat.changeType === 'positive'
                    ? 'text-green-600'
                    : stat.changeType === 'negative'
                    ? 'text-red-600'
                    : 'text-gray-600'
                }
              >
                {stat.change}
              </span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
