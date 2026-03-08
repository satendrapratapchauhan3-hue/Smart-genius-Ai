import { Suspense } from 'react'
import { OverviewCards } from '@/components/dashboard/overview-cards'
import { RecentActivity } from '@/components/dashboard/recent-activity'
import { AgentPerformance } from '@/components/dashboard/agent-performance'
import { QuickActions } from '@/components/dashboard/quick-actions'
import { Sparkles } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 glass rounded-2xl border border-white/5">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <h1 className="text-3xl font-bold text-white tracking-tight">Command Center</h1>
            <Sparkles className="h-5 w-5 text-indigo-400" />
          </div>
          <p className="text-slate-400">Welcome back! Manage your autonomous agents and scale operations.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <div className="px-4 py-2 bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20 text-sm font-medium flex items-center shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse mr-2"></span>
            System Operational
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Glow effect for overview section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-indigo-500/10 blur-[100px] -z-10 rounded-full"></div>
        <Suspense fallback={<div className="h-32 glass rounded-xl flex items-center justify-center text-slate-400 animate-pulse">Loading overview metrics...</div>}>
          <OverviewCards />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass p-6 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
          <h2 className="text-xl font-bold text-white mb-6">Agent Performance</h2>
          <Suspense fallback={<div className="h-64 flex items-center justify-center text-slate-400 animate-pulse">Loading telemetry...</div>}>
            <AgentPerformance />
          </Suspense>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
          <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
          <Suspense fallback={<div className="h-64 flex items-center justify-center text-slate-400 animate-pulse">Loading actions...</div>}>
            <QuickActions />
          </Suspense>
        </div>
      </div>

      <div className="glass p-6 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <h2 className="text-xl font-bold text-white mb-6">Intelligence Feed</h2>
        <Suspense fallback={<div className="h-40 flex items-center justify-center text-slate-400 animate-pulse">Loading feed...</div>}>
          <RecentActivity />
        </Suspense>
      </div>
    </div>
  )
}
