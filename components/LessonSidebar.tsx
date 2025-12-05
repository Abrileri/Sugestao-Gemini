import React from 'react';
import { LESSONS } from '../constants';

interface LessonSidebarProps {
  currentLessonId: number;
  onSelectLesson: (id: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const LessonSidebar: React.FC<LessonSidebarProps> = ({ currentLessonId, onSelectLesson, isOpen, onClose }) => {
  // Group lessons by category for better UX
  const groupedLessons = LESSONS.reduce((acc, lesson) => {
    if (!acc[lesson.category]) acc[lesson.category] = [];
    acc[lesson.category].push(lesson);
    return acc;
  }, {} as Record<string, typeof LESSONS>);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <div 
        className={`fixed top-16 bottom-0 left-0 w-80 bg-slate-50 border-r border-slate-200 z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto lg:translate-x-0 lg:static lg:h-[calc(100vh-64px)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 rounded-sm"></span>
            Conteúdo do Curso
          </h2>
          
          <div className="space-y-6">
            {Object.entries(groupedLessons).map(([category, lessons]) => (
              <div key={category}>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">
                  {category}
                </h3>
                <div className="space-y-1">
                  {lessons.map((lesson) => {
                    const isActive = lesson.id === currentLessonId;
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          onSelectLesson(lesson.id);
                          if(window.innerWidth < 1024) onClose();
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-start gap-3 ${
                          isActive 
                            ? 'bg-white text-amber-600 shadow-sm border border-slate-100 font-semibold' 
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <span className={`mt-0.5 min-w-[20px] h-5 flex items-center justify-center rounded-full text-[10px] ${isActive ? 'bg-amber-100' : 'bg-slate-200 text-slate-500'}`}>
                          {lesson.id}
                        </span>
                        <span className="line-clamp-2 leading-snug">{lesson.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};