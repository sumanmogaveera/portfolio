export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  badge: string;
  architectureNotes?: string;
}

export interface SkillItem {
  name: string;
  level: 'Core Focus' | 'Proficient' | 'Working Knowledge' | 'Foundational';
  percentage: number; // Realistic 60-85% for student
  experience: string;
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  period: string;
  title: string;
  role: string;
  skills: string[];
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: 'Ready to Upload' | 'In Progress' | 'Planned';
  description: string;
  skillsCovered: string[];
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}
