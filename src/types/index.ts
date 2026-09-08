export interface MetricItem {
  id: string;
  metric: string;
  label: string;
  sublabel: string;
  description: string;
  technicalHow: string[];
  impactCategory: 'performance' | 'stability' | 'financial' | 'quality';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  client?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientOrProject: string;
  badge: string;
  summary: string;
  image: string;
  problem: string;
  solution: string;
  results: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: { name: string; tag: string }[];
}

export interface EducationItem {
  institution: string;
  title: string;
  period: string;
  badge?: string;
  description?: string;
}

