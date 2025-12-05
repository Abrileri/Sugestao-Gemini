import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CourseCard } from './components/CourseCard';
import { LessonSidebar } from './components/LessonSidebar';
import { LessonPlayer } from './components/LessonPlayer';
import { LESSONS } from './constants';
import { CourseState } from './types';

function App() {
  const [state, setState] = useState<CourseState>({
    view: 'landing',
    currentLessonId: null,
    sidebarOpen: false
  });

  // Handle browser back button basic behavior support
  useEffect(() => {
    const handlePopState = () => {
      // Very basic history handling
      setState(prev => ({ ...prev, view: 'landing', currentLessonId: null }));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleStartCourse = () => {
    setState({ view: 'course', currentLessonId: 1, sidebarOpen: false });
    window.scrollTo(0,0);
  };

  const handleSelectLesson = (id: number) => {
    setState({ view: 'course', currentLessonId: id, sidebarOpen: false });
  };

  const handleGoHome = () => {
    setState({ view: 'landing', currentLessonId: null, sidebarOpen: false });
    window.scrollTo(0,0);
  };

  const toggleSidebar = () => {
    setState(prev => ({ ...prev, sidebarOpen: !prev.sidebarOpen }));
  };

  const navigateLesson = (direction: 'next' | 'prev') => {
    if (!state.currentLessonId) return;
    const currentIndex = LESSONS.findIndex(l => l.id === state.currentLessonId);
    
    if (direction === 'next' && currentIndex < LESSONS.length - 1) {
      handleSelectLesson(LESSONS[currentIndex + 1].id);
    } else if (direction === 'prev' && currentIndex > 0) {
      handleSelectLesson(LESSONS[currentIndex - 1].id);
    }
  };

  const currentLesson = LESSONS.find(l => l.id === state.currentLessonId);
  const currentIndex = state.currentLessonId ? LESSONS.findIndex(l => l.id === state.currentLessonId) : -1;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header 
        onGoHome={handleGoHome} 
        isCourseMode={state.view === 'course'} 
        onToggleSidebar={toggleSidebar}
      />

      <main>
        {state.view === 'landing' ? (
          <>
            <Hero onStartCourse={handleStartCourse} />
            
            <section id="lessons-grid" className="max-w-7xl mx-auto px-4 py-20">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Cronograma de Excelência</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Uma jornada completa de 30 módulos desenhada para transformar sua abordagem em Recrutamento e Seleção.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {LESSONS.map((lesson) => (
                  <CourseCard 
                    key={lesson.id} 
                    lesson={lesson} 
                    onClick={handleSelectLesson} 
                  />
                ))}
              </div>
              
              <div className="mt-20 text-center">
                <button 
                  onClick={handleStartCourse}
                  className="px-10 py-5 bg-amber-500 text-slate-900 rounded-full font-bold text-lg hover:bg-amber-400 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Inscrever-se no Curso Completo
                </button>
              </div>
            </section>
            
            <Footer />
          </>
        ) : (
          <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
            <LessonSidebar 
              currentLessonId={state.currentLessonId || 1} 
              onSelectLesson={handleSelectLesson}
              isOpen={state.sidebarOpen}
              onClose={() => setState(prev => ({ ...prev, sidebarOpen: false }))}
            />
            {currentLesson && (
              <LessonPlayer 
                lesson={currentLesson}
                onNext={() => navigateLesson('next')}
                onPrev={() => navigateLesson('prev')}
                hasNext={currentIndex < LESSONS.length - 1}
                hasPrev={currentIndex > 0}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;