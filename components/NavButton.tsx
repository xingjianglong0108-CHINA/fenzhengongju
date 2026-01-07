
import React, { useState } from 'react';

interface NavButtonProps {
  title: string;
  href: string;
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
  delay?: number;
  disabled?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({ 
  title, 
  href, 
  icon, 
  gradient, 
  accentColor,
  delay = 0, 
  disabled = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      alert('⚠️ 该功能模块正在最后优化中，即将上线！');
    }
  };

  // Advanced 3D transformation
  const transformStyle = {
    transform: isHovered 
      ? `rotateY(${mousePos.x * 20}deg) rotateX(${-mousePos.y * 20}deg) scale(1.05) translateY(-5px)` 
      : 'rotateY(0deg) rotateX(0deg) scale(1) translateY(0px)',
    transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
  };

  const shadowStyle = {
    boxShadow: isHovered 
      ? `0 30px 60px -12px ${accentColor}, 0 18px 36px -18px rgba(0,0,0,0.3)` 
      : '0 10px 30px -15px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.4s ease',
  };

  return (
    <a
      href={href}
      target={href.startsWith('http') ? "_blank" : "_self"}
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`
        relative group block w-full py-7 px-8 
        ios-blur border border-white/80
        rounded-[30px] overflow-hidden
        transition-all duration-300
        ${disabled ? 'opacity-80 grayscale-[0.4] cursor-not-allowed bg-slate-200/40' : 'cursor-pointer bg-white/60'}
      `}
      style={{
        ...transformStyle,
        ...shadowStyle,
        animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`,
      }}
    >
      {/* Dynamic Background Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} 
      />

      <div className="flex items-center justify-between relative z-10 pointer-events-none">
        <div className="flex items-center gap-6">
          <div className={`
            w-14 h-14 rounded-2xl flex items-center justify-center
            bg-gradient-to-br ${gradient}
            shadow-lg shadow-black/10
            transition-all duration-500
            ${isHovered ? 'scale-110 -rotate-6 shadow-xl' : 'scale-100'}
          `}>
            {icon}
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isHovered ? 'text-slate-900' : 'text-slate-700'}`}>
              {title}
            </span>
            {disabled && <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Coming Soon</span>}
          </div>
        </div>
        
        <div className={`
          w-10 h-10 rounded-full flex items-center justify-center
          bg-white/80 border border-white/20 shadow-sm transition-all duration-500
          ${isHovered ? 'translate-x-1 scale-110 bg-white opacity-100' : 'opacity-40'}
        `}>
          <svg 
            width="10" 
            height="18" 
            viewBox="0 0 10 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-colors duration-300 ${isHovered ? 'text-slate-800' : 'text-slate-400'}`}
          >
            <path d="M1.5 1.5L8.5 9L1.5 16.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Shimmer Shine Effect */}
      <div className="absolute inset-0 rounded-[30px] overflow-hidden pointer-events-none">
        <div className={`
          absolute top-[-150%] left-[-150%] w-[400%] h-[400%]
          bg-gradient-to-br from-white/30 via-white/5 to-transparent
          transition-transform duration-[1200ms] ease-out rotate-[35deg]
          ${isHovered ? 'translate-x-[60%] translate-y-[60%]' : '-translate-x-full -translate-y-full'}
        `} />
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </a>
  );
};
