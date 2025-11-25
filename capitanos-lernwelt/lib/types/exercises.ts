// Exercise Types for Capitano's Lernwelt

export interface Question {
  id: string;
  type: 'single-choice' | 'multiple-choice' | 'drag-drop' | 'sorting' | 'fill-blanks' | 'memory';
  question: string;
  image?: string;
  xp: number;
  explanation: string;
}

export interface SingleChoiceQuestion extends Question {
  type: 'single-choice';
  options: string[];
  correct: number;
}

export interface MultipleChoiceQuestion extends Question {
  type: 'multiple-choice';
  options: string[];
  correct: number[];
}

export interface DragDropQuestion extends Question {
  type: 'drag-drop';
  items: DragDropItem[];
  dropZones: DropZone[];
}

export interface DragDropItem {
  id: string;
  label: string;
}

export interface DropZone {
  id: string;
  label: string;
  correctItemId: string;
  position?: { x: number; y: number };
}

export interface SortingQuestion extends Question {
  type: 'sorting';
  items: string[];
  correctOrder: string[];
}

export interface FillBlanksQuestion extends Question {
  type: 'fill-blanks';
  text: string;
  blanks: BlankItem[];
  wordBank: string[];
}

export interface BlankItem {
  id: string;
  correctWord: string;
}

export interface MemoryCard {
  id: string;
  content: string;
  pairId: string;
  type: 'term' | 'definition';
}

export interface MemoryQuestion extends Question {
  type: 'memory';
  pairs: MemoryPair[];
}

export interface MemoryPair {
  id: string;
  term: string;
  definition: string;
}

export interface ExerciseResult {
  correct: boolean;
  xpEarned: number;
  message: string;
}
