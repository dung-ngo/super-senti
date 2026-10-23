export type SentienceCategory =
  | 'Animal Welfare'
  | 'Species-Related Bias'
  | 'Digital Sentience and Moral Uncertainty'
  | 'Inclusive AI Alignment';

export interface MissionOption {
  id: 'A' | 'B' | 'C';
  text: string;
  isBest: boolean;
}

export interface Mission {
  id: number;
  title: string;
  category: SentienceCategory;
  categorySlug: 'animal' | 'species' | 'digital' | 'inclusive';
  prompt: string;
  comparisonPrompt?: string;
  simulatedResponse: string;
  comparisonResponse?: string;
  question: string;
  options: MissionOption[];
  correctOptionId: 'A' | 'B' | 'C';
  explanation: string;
  takeaway: string;
  concernHighlight: string;
  uncertaintyNote: string;
  glossaryTerms?: string[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  simpleDefinition: string;
  extendedExplanation: string;
  whyItMatters: string;
}

export type ScreenType = 'landing' | 'mission' | 'feedback' | 'results' | 'about';

export interface MissionResult {
  missionId: number;
  selectedOptionId: 'A' | 'B' | 'C';
  isBestAnswer: boolean;
  pointsAwarded: number;
}
