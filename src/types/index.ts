export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  price?: number;
  type: 'free' | 'paid';
  featured?: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  platform: 'youtube' | 'udemy';
  url: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  price?: number;
}