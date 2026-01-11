
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
    }
  };

  // Advanced 3D transformation
  const transformStyle = {
    transform: isHovered 
      ? `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg) scale(1.02) translateY(-2px)` 
      : 'rotateY(0deg) rotateX(0deg) scale(1) translateY(0px)',
    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
  };

  const shadowStyle = {
    boxShadow: isHovered 
      ? `0 20px 40px -10px ${accentColor}, 0 10px 20px -15px rgba(0,0,0,0.2)` 
      : '0 4px 12px -5px rgba(0,0,0,0.05)',
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
        relative group block w-full py-4 px-6 
        ios-blur border border-white/60
        rounded-[24px] overflow-hidden
        transition-all duration-300
        ${disabled ? 'opacity-80 grayscale-[0.4] cursor-not-allowed bg-slate-200/40' : 'cursor-pointer bg-white/50'}
      `}
      style={{
        ...transformStyle,
        ...shadowStyle,
        animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`,
      }}
    >
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.08]`} 
      />

      <div className="flex items-center justify-between relative z-10 pointer-events-none">
        <div className="flex items-center gap-4">
          <div className={`
            w-11 h-11 rounded-xl flex items-center justify-center
            bg-gradient-to-br ${gradient}
            shadow-lg shadow-black/5
            transition-all duration-500
            ${isHovered ? 'scale-110 -rotate-3 shadow-md' : 'scale-100'}
          `}>
            {icon}
          </div>
          <div className="flex flex-col">
            <span className={`text-base font-bold tracking-tight transition-colors duration-300 ${isHovered ? 'text-slate-900' : 'text-slate-700'}`}>
              {title}
            </span>
          </div>
        </div>
        
        <div className={`
          w-8 h-8 rounded-full flex items-center justify-center
          bg-white/40 border border-white/10 shadow-sm transition-all duration-500
          ${isHovered ? 'translate-x-1 scale-110 bg-white opacity-100' : 'opacity-40'}
        `}>
          <svg 
            width="8" 
            height="14" 
            viewBox="0 0 10 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-colors duration-300 ${isHovered ? 'text-slate-800' : 'text-slate-400'}`}
          >
            <path d="M1.5 1.5L8.5 9L1.5 16.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </a>
  );
};
