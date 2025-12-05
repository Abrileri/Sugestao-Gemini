import React, { useEffect, useRef } from 'react';
import { Lesson } from '../types';

interface LessonPlayerProps {
  lesson: Lesson;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const LessonPlayer: React.FC<LessonPlayerProps> = ({ lesson, onNext, onPrev, hasNext, hasPrev }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when lesson changes
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    window.scrollTo(0,0);
  }, [lesson.id]);

  return (
    <div className="flex-1 bg-white h-full overflow-y-auto lg:h-[calc(100vh-64px)]" ref={contentRef}>
      <div className="max-w-4xl mx-auto px-4 py-8 lg:px-12 lg:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-slate-500 mb-6">
          <span className="hover:text-amber-600 cursor-pointer">Curso</span>
          <span className="mx-2">/</span>
          <span className="text-amber-600 font-medium">{lesson.category}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {lesson.title}
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-4 border-amber-500 pl-4">
          {lesson.description}
        </p>

        {/* Video Placeholder */}
        <div className="w-full aspect-video bg-slate-900 rounded-2xl shadow-2xl mb-12 flex items-center justify-center relative overflow-hidden group">
          {/* Mock Video Player UI */}
          <img 
            src={`https://picsum.photos/seed/${lesson.id + 50}/1280/720`} 
            alt="Video Thumbnail" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity"
          />
          <button className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-all border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white ml-1">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
            {lesson.duration}
          </div>
        </div>

        {/* Lesson Content */}
        <div className="prose prose-slate prose-lg max-w-none mb-16">
          <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
        </div>

        {/* Navigation Buttons */}
        <div className="border-t border-slate-200 pt-8 flex items-center justify-between gap-4">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border font-medium transition-all ${
              hasPrev 
                ? 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-amber-400' 
                : 'border-slate-100 text-slate-300 cursor-not-allowed'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Anterior
          </button>

          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all shadow-md ${
              hasNext 
                ? 'bg-amber-500 text-slate-900 hover:bg-amber-400 hover:shadow-lg' 
                : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            Próxima Aula
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};