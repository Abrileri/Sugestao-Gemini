import React from 'react';
import { COURSE_TITLE } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">{COURSE_TITLE}</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Formando a elite do Recrutamento e Seleção. Metodologia comprovada para transformar departamentos de RH em parceiros estratégicos de negócio.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-amber-500 transition-colors">Sobre o Instrutor</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Suporte</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
          <p className="text-sm mb-2">suporte@academiadacontratacao.com.br</p>
          <div className="flex gap-4 mt-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-amber-500 transition-colors cursor-pointer flex items-center justify-center">In</div>
            <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-amber-500 transition-colors cursor-pointer flex items-center justify-center">Ig</div>
            <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-amber-500 transition-colors cursor-pointer flex items-center justify-center">Yt</div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-900 text-center text-xs">
        &copy; {new Date().getFullYear()} Academia da Contratação com Excelência. Todos os direitos reservados.
      </div>
    </footer>
  );
};