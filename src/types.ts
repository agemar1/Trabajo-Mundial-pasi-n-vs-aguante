export type RuleCategory = 'todos' | 'aliento' | 'respeto' | 'fairplay' | 'arbitraje' | 'redes' | 'convivencia';

export interface RuleItem {
  id: number;
  number: string;
  title: string;
  category: RuleCategory;
  categoryLabel: string;
  text: string;
  coreTakeaway: string;
  practicalTip: string;
  whatsappQuote: string;
  iconName: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  scenario: string;
  options: {
    label: string;
    description: string;
    points: number; // 2: de ley, 1: intermedio, 0: hostil
    feedback: string;
  }[];
}

export interface FanCredential {
  name: string;
  nickname: string;
  role: string;
  city: string;
  dateCreated: string;
  pledgedRules: number[];
}
