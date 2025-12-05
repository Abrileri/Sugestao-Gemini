export interface Lesson {
  id: number;
  title: string;
  description: string;
  content: string; // The HTML/Markdown content
  videoUrl?: string;
  duration: string;
  category: string;
}

export interface CourseState {
  view: 'landing' | 'course';
  currentLessonId: number | null;
  sidebarOpen: boolean;
}