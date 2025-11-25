// Core Types for Capitano's Lernwelt

export interface Section {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  image?: string;
}

export interface QuizQuestion {
  id: string;
  type: 'single-choice' | 'multiple-choice';
  question: string;
  options: string[];
  correct: number | number[]; // single index or array of indices
  explanation: string;
  xp: number;
}

export interface DragDropQuestion {
  id: string;
  type: 'drag-drop';
  question: string;
  items: string[];
  correctOrder: string[];
  explanation: string;
  xp: number;
}

export interface LabelQuestion {
  id: string;
  type: 'label';
  question: string;
  image: string;
  labels: { text: string; x: number; y: number }[];
  explanation: string;
  xp: number;
}

export type Question = QuizQuestion | DragDropQuestion | LabelQuestion;

export interface Exercise {
  id: string;
  title: string;
  type: 'quiz' | 'drag-drop' | 'memory' | 'sort' | 'label';
  estimatedTime: number; // in minutes
  xp: number;
  questions?: Question[];
}

export interface Thema {
  id: string;
  title: string;
  icon: string;
  color: string;
  shortDescription: string;
  bookPages: string;
  sections: Section[];
  exercises: Exercise[];
  testPool: Question[];
}

export interface UserProgress {
  themaId: string;
  sectionsRead: string[];
  exercisesCompleted: string[];
  bestTestScore: number;
  testAttempts: number;
  lastAccessed?: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface UserState {
  name: string;
  xp: number;
  level: number;
  streak: number;
  lastActive: Date;
  themenProgress: Record<string, UserProgress>;
  achievements: Achievement[];
}
