
export type IntelligenceType = 
  | 'Linguistic'
  | 'Logical-Mathematical'
  | 'Bodily-Kinesthetic'
  | 'Spatial'
  | 'Musical'
  | 'Interpersonal'
  | 'Intrapersonal'
  | 'Naturalistic'
  | 'Existential';

export interface Question {
  id: number;
  text: string;
  type: IntelligenceType;
}

export interface IntelligenceInfo {
  type: IntelligenceType;
  description: string;
  traits: string[];
  color: string;
  careers: string[];
  activities: string[];
}
