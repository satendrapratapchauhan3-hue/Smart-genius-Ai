import Link from 'next/link'
import { Sparkles, ArrowRight, Github, Mail } from 'lucide-react'

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-50 flex flex-col justify-center relative overflow-hidden selection:bg-indigo-500/30">
            {/* Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none animate-blob animation-delay-2000" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="flex justify-center mb-6">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                            <Sparkles className="h-8 w-8 text-indigo-400" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight">
                            SmartGenius
                        </span>
                    </Link>
                </div>
                <h2 className="text-center text-3xl font-extrabold tracking-tight text-white mb-2">
                    Welcome back
                </h2>
                <p className="text-center text-sm text-slate-400">
                    Sign in to your Command Center and scale your automations.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 animate-fade-in">
                <div className="glass py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-white/5 relative overflow-hidden">
                    {/* Subtle inner glow */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                                Email address
                            </label>
                            <div className="mt-2 relative">
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
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-4 py-3 border border-white/10 rounded-xl bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all shadow-inner sm:text-sm backdrop-blur-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-white/10 rounded bg-slate-900/50"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-300">
                                Remember me for 30 days
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 transition-all group"
                            >
                                Sign in to Dashboard
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-slate-900/80 text-slate-400 rounded-full backdrop-blur-md border border-white/5">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-white/10 rounded-xl shadow-sm bg-slate-800/50 text-sm font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all backdrop-blur-sm"
                                >
                                    <Github className="h-5 w-5 mr-no-shrink" />
                                    <span className="ml-2">GitHub</span>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-white/10 rounded-xl shadow-sm bg-slate-800/50 text-sm font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all backdrop-blur-sm"
                                >
                                    <Mail className="h-5 w-5 mr-no-shrink text-red-400" />
                                    <span className="ml-2">Google</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-center text-sm text-slate-400">
                    Ready to scale your business?{' '}
                    <Link href="/signup" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                        Start your 14-day free trial
                    </Link>
                </p>
            </div>
        </div>
    )
}
