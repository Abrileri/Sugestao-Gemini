import React from 'react';
import { Lesson } from '../types';

interface CourseCardProps {
  lesson: Lesson;
  onClick: (id: number) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ lesson, onClick }) => {
  return (
    <div 
      onClick={() => onClick(lesson.id)}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1"
    >
      <div className="h-40 bg-slate-100 relative overflow-hidden">
        {/* Placeholder Dynamic Image using Picsum based on ID to ensure variety */}
        <img 
          src={`https://picsum.photos/seed/${lesson.id + 50}/600/400`} 
          alt={lesson.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
          Aula {lesson.id.toString().padStart(2, '0')}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-amber-600 text-xs font-bold uppercase tracking-wide mb-2">
          {lesson.category}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
          {lesson.title}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-3 flex-grow">
          {lesson.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center text-slate-400 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
            </svg>
            {lesson.duration}
          </div>
          <span className="text-amber-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
            Acessar
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};