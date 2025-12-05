import React from 'react';
import { COURSE_TITLE } from '../constants';

interface HeaderProps {
  onGoHome: () => void;
  isCourseMode: boolean;
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGoHome, isCourseMode, onToggleSidebar }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {isCourseMode && (
            <button 
              onClick={onToggleSidebar}
              className="lg:hidden text-slate-300 hover:text-white transition-colors p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          )}
          <div 
            onClick={onGoHome} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900 font-bold text-lg group-hover:bg-amber-400 transition-colors">
              A
            </div>
            <h1 className="text-white font-semibold text-lg tracking-wide hidden sm:block">
              Academia da <span className="text-amber-500">Contratação</span>
            </h1>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          {!isCourseMode && (
             <button onClick={() => window.scrollTo({ top: document.getElementById('lessons-grid')?.offsetTop, behavior: 'smooth' })} className="text-slate-300 hover:text-white text-sm font-medium transition-colors hidden sm:block">
               Conteúdo
             </button>
          )}
          <button 
            className="px-4 py-2 text-sm font-medium text-slate-900 bg-amber-500 rounded-full hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)]"
          >
            {isCourseMode ? 'Área do Aluno' : 'Inscreva-se Agora'}
          </button>
        </nav>
      </div>
    </header>
  );
};