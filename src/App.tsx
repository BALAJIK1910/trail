import { useState, FormEvent, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Terminal, 
  Search, 
  MousePointerClick, 
  CheckCircle, 
  ShieldCheck, 
  AlertCircle,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [flagInput, setFlagInput] = useState('');
  const [verificationState, setVerificationState] = useState<'idle' | 'success' | 'error'>('idle');
  const [showHint, setShowHint] = useState<number | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(true);

  const CORRECT_FLAG = "FLAG{y0u_followed_th3_tra1l}";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('portal') && !urlParams.has('verifier')) {
      window.location.replace('/start.html');
    } else {
      setIsRedirecting(false);
    }
  }, []);

  const handleVerify = (e: FormEvent) => {
    e.preventDefault();
    if (flagInput.trim() === CORRECT_FLAG) {
      setVerificationState('success');
    } else {
      setVerificationState('error');
      // Reset after a short period
      setTimeout(() => {
        setVerificationState('idle');
      }, 3000);
    }
  };

  const ctfHints = [
    {
      title: "Checkpoint 1 - origin (start.html)",
      description: "Inspecting the paragraph text reveals a disguised link showing the pathway is 'one hop away'."
    },
    {
      title: "Checkpoint 2 - gateway (middle.html)",
      description: "Note the browser tab title suffix or faint diagnostic diagonal watermark lines."
    },
    {
      title: "Checkpoint 3 - directory (trail3.html)",
      description: "The custom #explorer_profile tags or search footnote points you to the adjacent nomad profile."
    },
    {
      title: "Checkpoint 4 - social bio (trail4.html)",
      description: "Scroll to NomadCoder's recent status update pointing to his retro sandbox container on system terminal 5."
    },
    {
      title: "Checkpoint 5 - command console (trail5.html)",
      description: "Read terminal initialization logs where Grandma's secret recipe catalog server registry is mapped."
    },
    {
      title: "Checkpoint 6 - kitchen recipe (trail6.html)",
      description: "Baking instructions reference localized climate and air draft parameters on weather station 7."
    },
    {
      title: "Checkpoint 7 - meteorology (trail7.html)",
      description: "The alert banner points you directly to payment/billing server checkout integrations."
    },
    {
      title: "Checkpoint 8 - secure invoice (trail8.html)",
      description: "Terms outline transaction monitoring using active uptime indicators over on station 9."
    },
    {
      title: "Checkpoint 9 - status monitor (trail9.html)",
      description: "The syslog stream lists an administrative notice mentioning Chat assistants at route index 10."
    },
    {
      title: "Checkpoint 10 - chatbot prompt (trail10.html)",
      description: "The conversation between user and Aegis AI assistant leaks the text document reader location."
    },
    {
      title: "Checkpoint 11 - ancient book (trail11.html)",
      description: "A quote block highlights a critical system patch requirement inside updating sector 12."
    },
    {
      title: "Checkpoint 12 - patch controller (trail12.html)",
      description: "Operating notices advise routing matches and link parameters to reach final checkpoint 13."
    },
    {
      title: "Checkpoint 13 - final key (end.html)",
      description: "Allow the cryptographic status simulator to calculate blocks to decrypt and print the flag format!"
    }
  ];

  if (isRedirecting) {
    return (
      <div className="min-h-screen bg-[#090d16] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-3">
          <div className="h-8 w-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
          <span className="text-xs text-slate-500 font-mono tracking-wider">LOADING DIRECTORY...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between selection:bg-indigo-500/30 selection:text-white">
      
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(244,63,94,0.04)_0%,transparent_60%)] pointer-events-none" />

      {/* Top Header */}
      <header className="border-b border-slate-800/60 bg-slate-900/40 backdrop-blur-md px-6 py-4 relative z-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-white block">CTF Portal</span>
              <span className="text-[10px] text-slate-500 font-mono block">VER: 1.0.4 // LOCAL_HOST</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono bg-slate-800/40 text-slate-400 border border-slate-800 px-3 py-1.5 rounded-lg">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>GATEWAY ONLINE</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto p-6 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 flex-grow w-full">
        
        {/* Left Hand: Briefing and Launch Card */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-semibold">
              <Clock className="h-3 w-3" />
              <span>Active Challenge</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white leading-tight">
              Redirect Chain <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400">
                HTML Labyrinth
              </span>
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              A secure message packet has been fragmented across thirteen independent server nodes forming a deep redirect labyrinth. Follow the sequence of clues, inspect each layout theme, and trace the sequence to decrypt the flag.
            </p>
          </motion.div>

          {/* Core Launcher Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-6 shadow-2xl backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-indigo-600/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors" />
            
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Play className="h-4 w-4 text-indigo-400 fill-indigo-400/20" />
                Challenge Briefing
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed">
                Clicking the launch button below loads the origin checkpoint page. Analyze paragraphs, page titles, comments, and client headers to move forward through the chain.
              </p>
            </div>

            {/* Structured Rules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex gap-3 bg-slate-800/40 p-3 rounded-xl border border-slate-800/50 font-sans">
                <Search className="h-5 w-5 text-indigo-400 shrink-0" />
                <div>
                  <h3 className="text-xs font-semibold text-slate-200">13 Node Labyrinth</h3>
                  <p className="text-[10px] text-slate-500">Trace redirects from Node 1 to 13.</p>
                </div>
              </div>
              <div className="flex gap-3 bg-slate-800/40 p-3 rounded-xl border border-slate-800/50 font-sans">
                <MousePointerClick className="h-5 w-5 text-indigo-400 shrink-0" />
                <div>
                  <h3 className="text-xs font-semibold text-slate-200">Diverse Vibe Themes</h3>
                  <p className="text-[10px] text-slate-500">Blogs, Terminal, Checkout, AI Chat, and more.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="/start.html" 
                className="w-full inline-flex justify-center items-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white hover:from-indigo-600 hover:to-violet-700 shadow-lg shadow-indigo-500/10 active:scale-[0.98] transition-all"
              >
                Commence Challenge (start.html)
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Hand: Verification & Hints */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Flag Submission Module */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#0e1628]/90 border border-slate-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-md relative"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-sm font-bold text-white tracking-widest uppercase font-mono flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Flag Verifier
                </h2>
                <p className="text-[11px] text-slate-500">Submit the recovered flag key to verify transaction integrity.</p>
              </div>

              <form onSubmit={handleVerify} className="space-y-3">
                <div className="space-y-1.5">
                  <input 
                    type="text"
                    value={flagInput}
                    onChange={(e) => {
                      setFlagInput(e.target.value);
                      if (verificationState !== 'idle') setVerificationState('idle');
                    }}
                    placeholder="FLAG{...}"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-mono text-indigo-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500/80 transition-all text-center"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700/60 py-2.5 rounded-xl transition-all"
                >
                  Verify Key
                </button>
              </form>

              {/* Status Display */}
              {verificationState === 'success' && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 p-4 rounded-xl flex gap-3 text-xs leading-relaxed animate-[fadeIn_0.3s_ease]">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Authorization Successful!</span>
                    Flag matches local authority database hash. Master trace connection established.
                  </div>
                </div>
              )}

              {verificationState === 'error' && (
                <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 p-4 rounded-xl flex gap-3 text-xs leading-relaxed animate-[fadeIn_0.3s_ease]">
                  <AlertCircle className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Incorrect Flag Key</span>
                    Double check letters uppercase/lowercase and special syntax in final node!
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Interactive Hints Accents */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 font-mono">
              Intelligence Hints
            </h2>
            <div className="space-y-2">
              {ctfHints.map((hint, idx) => (
                <div key={idx} className="border border-slate-800/60 rounded-xl bg-slate-900/40 text-xs overflow-hidden">
                  <button 
                    onClick={() => setShowHint(showHint === idx ? null : idx)}
                    className="w-full px-4 py-3 flex justify-between items-center hover:bg-slate-800/40 text-left transition-colors"
                  >
                    <span className="font-semibold text-slate-300">{hint.title}</span>
                    <ChevronRight className={`h-4 w-4 text-slate-500 transition-transform ${showHint === idx ? 'transform rotate-90 text-indigo-400' : ''}`} />
                  </button>
                  {showHint === idx && (
                    <div className="px-4 pb-4 text-slate-400 leading-relaxed text-[11px] border-t border-slate-800/40 pt-2 bg-slate-950/20">
                      {hint.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/30 px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-600 gap-4">
        <span>© 2026 Redirect Chain CTF Challenge</span>
        <div className="flex items-center space-x-4 font-mono">
          <span>HOST: google-aistudio-v4</span>
          <span>•</span>
          <span>TIMESTAMP: 2026-05-21T20:01:15Z</span>
        </div>
      </footer>

    </div>
  );
}
