import { useEffect } from 'react';
import { ExternalLink, Terminal } from 'lucide-react';

export default function App() {
    useEffect(() => {
        window.sessionStorage.setItem('trail-progress', 'start.html');
        window.location.replace('/start.html');
    }, []);

    return (
        <div className="min-h-screen bg-[#090d16] text-slate-100 flex items-center justify-center px-6 selection:bg-indigo-500/30 selection:text-white">
            <div className="max-w-md w-full rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-md p-8 shadow-2xl space-y-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08)_0%,transparent_60%)] pointer-events-none" />
                <div className="relative z-10 space-y-4">
                    <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg">
                        <Terminal className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-black tracking-tight text-white">Redirect Chain</h1>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            You are being sent directly to the start page. The flag submission screen has been removed from this app.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="h-8 w-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
                        <span className="text-xs text-slate-500 font-mono tracking-wider">REDIRECTING TO START...</span>
                    </div>
                    <a
                        href="/start.html"
                        onClick={() => window.sessionStorage.setItem('trail-progress', 'start.html')}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition-all hover:from-indigo-600 hover:to-violet-700"
                    >
                        Open start.html
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}