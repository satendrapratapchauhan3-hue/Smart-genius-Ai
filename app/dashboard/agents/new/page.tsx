'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bot, ArrowLeft, Save, Eye } from 'lucide-react'

export default function NewAgentPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'GENERAL',
    capabilities: [],
    config: {
      temperature: 0.7,
      maxTokens: 1000,
      systemPrompt: '',
    }
  })

  const agentTypes = [
    { value: 'SALES', label: 'Sales Agent', description: 'Handle sales conversations and lead qualification' },
    { value: 'MARKETING', label: 'Marketing Agent', description: 'Create content and manage marketing campaigns' },
    { value: 'SUPPORT', label: 'Support Agent', description: 'Provide customer support and answer questions' },
    { value: 'GENERAL', label: 'General Agent', description: 'Versatile agent for various tasks' },
  ]

  const capabilities = [
    'Lead Qualification',
    'Appointment Booking',
    'Product Recommendations',
    'Customer Support',
    'Content Generation',
    'Data Analysis',
    'Email Management',
    'Social Media Management',
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Agents
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Create New Agent</h1>
          <p className="text-gray-600">Build an intelligent AI agent for your business needs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Agent Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Sales Assistant"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Describe what this agent does..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Agent Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {agentTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        formData.type === type.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => setFormData({ ...formData, type: type.value })}
                    >
                      <div className="font-medium text-gray-900">{type.label}</div>
                      <div className="text-sm text-gray-600">{type.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((capability) => (
                  <label key={capability} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.capabilities.includes(capability)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            capabilities: [...formData.capabilities, capability]
                          })
                        } else {
                          setFormData({
                            ...formData,
                            capabilities: formData.capabilities.filter(c => c !== capability)
                          })
                        }
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{capability}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  System Prompt
                </label>
                <textarea
                  value={formData.config.systemPrompt}
                  onChange={(e) => setFormData({
                    ...formData,
                    config: { ...formData.config, systemPrompt: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={6}
                  placeholder="Define the agent's personality and behavior..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Temperature ({formData.config.temperature})
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={formData.config.temperature}
                    onChange={(e) => setFormData({
                      ...formData,
                      config: { ...formData.config, temperature: parseFloat(e.target.value) }
                    })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Tokens
                  </label>
                  <input
                    type="number"
                    value={formData.config.maxTokens}
                    onChange={(e) => setFormData({
                      ...formData,
                      config: { ...formData.config, maxTokens: parseInt(e.target.value) }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {formData.name || 'Agent Name'}
                      </div>
                      <div className="text-sm text-gray-600">{formData.type}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    {formData.description || 'Agent description will appear here...'}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">Capabilities:</div>
                  <div className="flex flex-wrap gap-2">
                    {formData.capabilities.length > 0 ? (
                      formData.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {cap}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-gray-500">No capabilities selected</span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <Button className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Create Agent
            </Button>
            <Button variant="outline" className="w-full">
              Save as Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
