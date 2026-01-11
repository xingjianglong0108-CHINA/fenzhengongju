
import React from 'react';
import { NavButton } from './components/NavButton';
import { 
  Activity, 
  ShieldCheck, 
  Baby, 
  HeartPulse, 
  Zap, 
  TriangleAlert 
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden py-10 md:py-16">
      {/* Immersive Medical-Style Background Layers */}
      <div className="absolute inset-0 -z-10 bg-[#F0F7FF] fixed">
        <div className="absolute top-[-10%] left-[-5%] w-[70%] h-[50%] bg-cyan-100/50 rounded-full blur-[100px] animate-mesh" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[80%] h-[70%] bg-blue-100/60 rounded-full blur-[130px] animate-mesh" style={{ animationDelay: '-7s' }} />
        <div className="absolute top-[20%] right-[-5%] w-[45%] h-[45%] bg-white/70 rounded-full blur-[90px] animate-mesh" style={{ animationDelay: '-12s' }} />
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-[0.3] pointer-events-none" />
      </div>

      <header className="mb-10 text-center px-6 relative animate-[fadeInDown_1s_ease-out]">
        <div className="inline-block px-4 py-1 rounded-full bg-white/60 border border-blue-100 shadow-sm text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4 backdrop-blur-md">
          Medical Decision Support
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gradient tracking-tight mb-2">
          LZRYEK
        </h1>
        <p className="text-lg md:text-xl font-semibold text-slate-500 tracking-wide max-w-sm mx-auto">
          分诊及生命支持系统
        </p>
      </header>

      <main className="w-full max-w-lg px-6 flex flex-col gap-6 perspective-2000">
        {/* Section: Triage System */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <div className="w-1 h-4 bg-blue-500 rounded-full" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">分诊系统 / Triage</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <NavButton 
              title="AAP-PAT" 
              href="https://aappat.netlify.app/"
              icon={<Activity className="w-6 h-6 text-white" />}
              gradient="from-blue-600 to-cyan-500"
              accentColor="rgba(37, 99, 235, 0.3)"
              delay={0.1}
            />
            <NavButton 
              title="PETS" 
              href="https://petslzry.netlify.app/"
              icon={<ShieldCheck className="w-6 h-6 text-white" />}
              gradient="from-teal-500 to-emerald-600"
              accentColor="rgba(20, 184, 166, 0.3)"
              delay={0.2}
            />
          </div>
        </div>

        {/* Section: Life Support System */}
        <div className="space-y-4 mt-4">
          <div className="flex items-center gap-2 px-2">
            <div className="w-1 h-4 bg-rose-500 rounded-full" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">生命支持 / Life Support</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <NavButton 
              title="新生儿复苏" 
              href="https://neonaters.netlify.app/"
              icon={<Baby className="w-6 h-6 text-white" />}
              gradient="from-rose-400 to-orange-400"
              accentColor="rgba(251, 113, 133, 0.3)"
              delay={0.3}
            />
            <NavButton 
              title="儿科基础生命支持" 
              href="https://lzryekbls.netlify.app/"
              icon={<HeartPulse className="w-6 h-6 text-white" />}
              gradient="from-sky-500 to-indigo-500"
              accentColor="rgba(14, 165, 233, 0.3)"
              delay={0.4}
            />
            <NavButton 
              title="儿科高级生命支持" 
              href="https://lzryekpals.netlify.app/"
              icon={<Zap className="w-6 h-6 text-white" />}
              gradient="from-violet-500 to-purple-600"
              accentColor="rgba(139, 92, 246, 0.3)"
              delay={0.5}
            />
            <NavButton 
              title="儿科复苏的特殊情况" 
              href="https://fusuteshu.netlify.app/"
              icon={<TriangleAlert className="w-6 h-6 text-white" />}
              gradient="from-amber-500 to-orange-600"
              accentColor="rgba(245, 158, 11, 0.3)"
              delay={0.6}
            />
          </div>
        </div>
      </main>

      <footer className="mt-16 mb-8 text-blue-900/30 text-[9px] font-bold tracking-[0.3em] uppercase text-center">
        LZRYEK MEDICAL CENTER • 智慧医疗与急救支持
      </footer>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
