
import React from 'react';
import { NavButton } from './components/NavButton';
import { Activity, ShieldAlert, HeartPulse } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-12">
      {/* Immersive Medical-Style Background Layers */}
      <div className="absolute inset-0 -z-10 bg-[#F0F7FF]">
        {/* Soft Cyan/Teal Blob */}
        <div className="absolute top-[-10%] left-[-5%] w-[70%] h-[50%] bg-cyan-100/50 rounded-full blur-[100px] animate-mesh" />
        {/* Deep Medical Blue Blob */}
        <div className="absolute bottom-[-15%] right-[-10%] w-[80%] h-[70%] bg-blue-100/60 rounded-full blur-[130px] animate-mesh" style={{ animationDelay: '-7s' }} />
        {/* Clean White Accent Blob */}
        <div className="absolute top-[20%] right-[-5%] w-[45%] h-[45%] bg-white/70 rounded-full blur-[90px] animate-mesh" style={{ animationDelay: '-12s' }} />
        
        {/* Subtle Medical Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-[0.4] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-blue-100/30 pointer-events-none" />
      </div>

      <header className="mb-16 text-center px-6 relative animate-[fadeInDown_1s_ease-out]">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 border border-blue-100 shadow-sm text-[10px] font-bold text-blue-500 tracking-[0.25em] uppercase mb-6 backdrop-blur-md">
          Professional Medical Support
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gradient tracking-tight mb-4">
          LZRYEK
        </h1>
        <div className="h-1 w-16 bg-blue-400/40 mx-auto rounded-full mb-6" />
        <p className="text-xl md:text-2xl font-semibold text-slate-600 tracking-wide max-w-sm mx-auto leading-relaxed">
          分诊及生命支持系统
        </p>
      </header>

      <main className="w-full max-w-md px-8 flex flex-col gap-8 perspective-2000">
        <NavButton 
          title="AAP-PAT" 
          href="https://aappat.netlify.app/"
          icon={<Activity className="w-7 h-7 text-white" />}
          gradient="from-blue-600 to-cyan-500"
          accentColor="rgba(37, 99, 235, 0.4)"
          delay={0.2}
        />
        
        <NavButton 
          title="PETS" 
          href="https://petslzry.netlify.app/"
          icon={<ShieldAlert className="w-7 h-7 text-white" />}
          gradient="from-teal-500 to-emerald-600"
          accentColor="rgba(20, 184, 166, 0.4)"
          delay={0.4}
        />
        
        <NavButton 
          title="生命支持" 
          href="#"
          icon={<HeartPulse className="w-7 h-7 text-white" />}
          gradient="from-sky-500 to-indigo-600"
          accentColor="rgba(14, 165, 233, 0.4)"
          delay={0.6}
          disabled={true}
        />
      </main>

      <footer className="mt-20 text-blue-900/40 text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 animate-[fadeIn_2s_ease-in]">
        LZRYEK MEDICAL CENTER • 智慧医疗
      </footer>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default App;
