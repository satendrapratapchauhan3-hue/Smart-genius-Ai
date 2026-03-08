import Link from 'next/link'
import { Sparkles, ArrowRight, Github, Mail, CheckCircle2 } from 'lucide-react'

export default function SignupPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-50 flex flex-col justify-center relative overflow-hidden selection:bg-indigo-500/30">
            {/* Background Effects */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none animate-blob" />
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px] pointer-events-none animate-blob animation-delay-2000" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl">

                {/* Left Side - Value Proposition */}
                <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up">
                    <Link href="/" className="flex items-center space-x-2 group w-fit">
                        <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                            <Sparkles className="h-8 w-8 text-indigo-400" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight">
                            SmartGenius
                        </span>
                    </Link>

                    <div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                            Start building <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                sellable automation
                            </span> today.
                        </h1>
                        <p className="text-lg text-slate-400 max-w-lg">
                            Join thousands of agencies and founders scaling their operations with enterprise-grade autonomous agents.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            'Unlimited workflows included in trial',
                            'Enterprise-grade security & encryption',
                            'Priority 24/7 dedicated support',
                            'Cancel anytime, no questions asked'
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center space-x-3 text-slate-300">
                                <CheckCircle2 className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 glass rounded-2xl border border-white/5 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors" />
                        <p className="text-slate-300 italic mb-4 relative z-10">
                            "SmartGenius AI helped our agency automate 80% of client onboarding, saving us 40 hours a week."
                        </p>
                        <div className="flex items-center space-x-3 relative z-10">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400" />
                            <div>
                                <p className="text-sm font-medium text-white">Sarah Jenkins</p>
                                <p className="text-xs text-slate-400">Founder, ScaleOps</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Signup Form */}
                <div className="w-full lg:w-1/2 max-w-md animate-fade-in animation-delay-300">
                    <div className="glass py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Create your account</h2>
                            <p className="text-sm text-slate-400">Start your 14-day free trial. No credit card required.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button className="w-full flex items-center justify-center px-4 py-2 border border-white/10 rounded-xl shadow-sm bg-slate-800/50 text-sm font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all backdrop-blur-sm">
                                <Github className="h-5 w-5 mr-no-shrink" />
                                <span className="ml-2">GitHub</span>
                            </button>
                            <button className="w-full flex items-center justify-center px-4 py-2 border border-white/10 rounded-xl shadow-sm bg-slate-800/50 text-sm font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all backdrop-blur-sm">
                                <Mail className="h-5 w-5 mr-no-shrink text-red-400" />
                                <span className="ml-2">Google</span>
                            </button>
                        </div>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-slate-900/80 text-slate-400 rounded-full backdrop-blur-md border border-white/5">
                                    Or register with email
                                </span>
                            </div>
                        </div>

                        <form className="space-y-5" action="#" method="POST">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                                    Full name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="appearance-none block w-full px-4 py-3 border border-white/10 rounded-xl bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all shadow-inner sm:text-sm backdrop-blur-sm"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-4 py-3 border border-white/10 rounded-xl bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all shadow-inner sm:text-sm backdrop-blur-sm"
                                    placeholder="you@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none block w-full px-4 py-3 border border-white/10 rounded-xl bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all shadow-inner sm:text-sm backdrop-blur-sm"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 transition-all group"
                                >
                                    Create Account
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>

                        <p className="mt-6 text-center text-sm text-slate-400">
                            Already have an account?{' '}
                            <Link href="/login" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                                Sign in instead
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
