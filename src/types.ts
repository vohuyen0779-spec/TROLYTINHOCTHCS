export type GradeLevel = 6 | 7 | 8 | 9;

export type ActiveScreen = 'home' | 'chat' | 'quiz' | 'glossary' | 'health';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: number;
  challenge?: string;
  source?: 'gemini' | 'knowledge_base';
}

export interface QuizQuestion {
  id: string;
  grade: GradeLevel;
  topic: string;
  question: string;
  options: [string, string, string, string]; // [A, B, C, D]
  correctAnswer: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface QuizState {
  grade: GradeLevel;
  questionCount: 10 | 20 | 30;
  currentIndex: number;
  questions: QuizQuestion[];
  userAnswers: Record<number, number>; // question index -> selected option index
  score: number;
  isCompleted: boolean;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  englishTerm?: string;
  grade: GradeLevel;
  category: string;
  definition: string;
  example: string;
  challenge: {
    question: string;
    options: [string, string, string, string];
    correctAnswer: number;
    explanation: string;
  };
}

export interface HealthTopic {
  id: 'eyes' | 'posture' | 'keyboard_mouse' | 'breaks';
  title: string;
  icon: string;
  color: string;
  headline: string;
  tips: string[];
  rules: { title: string; desc: string }[];
  funFact: string;
}

export interface HealthChallenge {
  id: string;
  scenario: string;
  options: [string, string, string, string];
  correctAnswer: number;
  explanation: string;
  healthTip: string;
}

export interface Badge {
  id: 'newbie' | 'quiz_explorer' | 'quiz_master' | 'ai_friend' | 'health_knight';
  icon: string;
  title: string;
  description: string;
  requirementText: string;
  unlocked: boolean;
  unlockedAt?: number;
}

export interface UserStats {
  totalQuestionsAnswered: number;
  quizzesCompleted: number;
  highestScorePercent: number;
  aiChatCount: number;
  termsExplored: number;
  healthChallengesCompleted: number;
  badges: Record<string, boolean>;
}
