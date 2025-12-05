import React from 'react';
import { COURSE_SUBTITLE, COURSE_TITLE } from '../constants';

interface HeroProps {
  onStartCourse: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartCourse }) => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 flex flex-col items-center text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-amber-500 text-xs font-semibold tracking-wider uppercase mb-6">
          Curso Online Profissionalizante
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight max-w-4xl">
          {COURSE_TITLE}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
          {COURSE_SUBTITLE} Domine as técnicas, ferramentas e estratégias comportamentais para identificar os melhores talentos do mercado.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button 
            onClick={onStartCourse}
            className="px-8 py-4 bg-amber-500 text-slate-900 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            Começar Agora
          </button>
          <button className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all">
            Ver Ementa Completa
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-400 border-t border-slate-800 pt-8 w-full max-w-5xl">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">30+</span>
            <span className="text-sm">Aulas Práticas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">10h</span>
            <span className="text-sm">Carga Horária</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">100%</span>
            <span className="text-sm">Online & Vitalício</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">5.0</span>
            <span className="text-sm">Avaliação Média</span>
          </div>
        </div>
      </div>
    </div>
  );
};