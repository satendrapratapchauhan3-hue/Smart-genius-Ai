import Link from 'next/link'
import { ArrowRight, Zap, Shield, BarChart3, MessageSquare, Workflow, Bot, Sparkles, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 overflow-hidden font-sans selection:bg-indigo-500/30">

      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-pink-600/20 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full top-0 z-50 glass border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">SmartGenius AI</span>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  Sign In
                </Link>
                <Link href="/signup">
                  <button className="relative group overflow-hidden rounded-full p-[1px]">
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="px-6 py-2 bg-[#0f172a] rounded-full relative group-hover:bg-opacity-0 transition-all duration-300">
                      <span className="text-sm font-medium text-white">Start Building</span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 border border-white/10 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">SmartGenius Engine v2.0 is live</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-8 animate-slide-up">
              Automate. Scale. <br />
              <span className="gradient-text">Dominate.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              Build hyper-intelligent, sellable AI workflows in minutes. Turn your business into a $10k/month revenue machine with enterprise-grade automation that never sleeps.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Link href="/signup">
                <button className="group relative w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
                  <span>Deploy Your First Agent</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/demo">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-all text-white backdrop-blur-md">
                  View Demo Architecture
                </button>
              </Link>
            </div>

            {/* Dashboard Preview / Mockup */}
            <div className="mt-20 relative animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 h-full w-full" />
              <div className="glass rounded-2xl border border-white/10 p-2 mx-auto max-w-5xl shadow-2xl relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-20 -z-10 animate-pulse-glow" />
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard Preview" className="rounded-xl border border-white/5 opacity-80 mix-blend-screen" />
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Bento Grid */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Built for the <br /><span className="gradient-text">Next Generation</span> of SaaS</h2>
              <p className="text-xl text-slate-400 max-w-2xl">Enterprise-level architecture scaled down to a beautiful, intuitive interface. You don't just use SmartGenius, you own the automation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="md:col-span-2 glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors" />
                <Workflow className="h-12 w-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Infinite Workflows</h3>
                <p className="text-slate-400 text-lg mb-8 max-w-md">Connect your entire tech stack visually. Drag, drop, and deploy AI agents that orchestrate sales calls, email campaigns, and CRM updates simultaneously.</p>
              </div>

              {/* Card 2 */}
              <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />
                <Bot className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Autonomous AI</h3>
                <p className="text-slate-400 text-lg">Agents that learn from your exact business model and close deals unconditionally.</p>
              </div>

              {/* Card 3 */}
              <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-pink-500/30 transition-colors">
                <BarChart3 className="h-12 w-12 text-pink-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Revenue Analytics</h3>
                <p className="text-slate-400 text-lg">Track ROI down to the cent with predictive AI forecasting.</p>
              </div>

              {/* Card 4 */}
              <div className="md:col-span-2 glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <Shield className="h-12 w-12 text-emerald-400 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Military-Grade Security</h3>
                    <p className="text-slate-400 text-lg mb-6">Your data is your moat. We employ SOC-2 compliant architecture with end-to-end encryption to ensure your automation remains your proprietary secret.</p>
                    <ul className="space-y-3">
                      {['End-to-end Encryption', 'Role-based Access', 'Audit Logging'].map((item, i) => (
                        <li key={i} className="flex items-center text-slate-300">
                          <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/50" />
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Stop Working. <br />
              <span className="gradient-text">Start Scaling.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Join elite operators using SmartGenius to print revenue on autopilot. The future of business is autonomous.
            </p>
            <Link href="/signup">
              <button className="relative group overflow-hidden rounded-full p-[2px] inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
                <div className="px-10 py-5 bg-[#020617] rounded-full relative group-hover:bg-opacity-80 transition-all duration-300 flex items-center space-x-3">
                  <span className="text-lg font-bold text-white">Claim Your Access</span>
                  <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-[#020617] pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-8 w-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">SmartGenius AI</span>
                </div>
                <p className="text-slate-400 max-w-sm">The world's most advanced autonomous agent platform for elite businesses.</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-6">Platform</h4>
                <ul className="space-y-4 text-slate-400">
                  <li><Link href="/agents" className="hover:text-white transition-colors">Agents</Link></li>
                  <li><Link href="/workflows" className="hover:text-white transition-colors">Workflows</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-6">Legal</h4>
                <ul className="space-y-4 text-slate-400">
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                  <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-sm">
              <p>&copy; {new Date().getFullYear()} SmartGenius AI. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}
