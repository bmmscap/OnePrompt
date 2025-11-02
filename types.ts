
export interface CaseStudy {
  title: string;
  description: string;
}

export interface Solution {
  id: 'Broadcast' | 'Finance' | 'Startup' | 'Legal' | 'CSuite';
  name: string;
  emoji: string;
  title: string;
  challenge: string;
  output: string;
  caseStudies?: CaseStudy[];
  metrics: string[];
  additionalInfo?: string;
}
