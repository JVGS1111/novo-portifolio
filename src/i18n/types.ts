export type Language = 'en' | 'pt';

export interface MetricItemI18n {
  id: string;
  metric: string;
  label: string;
  sublabel: string;
  description: string;
  technicalHow: string[];
  impactCategory: 'performance' | 'stability' | 'financial' | 'quality';
}

export interface ExperienceItemI18n {
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

export interface CaseStudyItemI18n {
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

export interface SkillCategoryI18n {
  id: string;
  name: string;
  description: string;
  skills: { name: string; tag: string }[];
}

export interface EducationItemI18n {
  institution: string;
  title: string;
  period: string;
  badge?: string;
  description?: string;
}

export interface LanguageProficiencyI18n {
  name: string;
  level: string;
  desc: string;
}

export interface Translations {
  nav: {
    metrics: string;
    cases: string;
    trajectory: string;
    skills: string;
    contact: string;
    connectBtn: string;
    roleBadge: string;
  };
  hero: {
    badgeRole: string;
    badgeYears: string;
    headlinePrefix: string;
    headlineHighlight: string;
    headlineSuffix: string;
    subtitleHtml: string;
    statStabilityLabel: string;
    statStabilityValue: string;
    statStabilitySub: string;
    statMemoryLabel: string;
    statMemoryValue: string;
    statMemorySub: string;
    statStartupLabel: string;
    statStartupValue: string;
    statStartupSub: string;
    statInnovationLabel: string;
    statInnovationValue: string;
    statInnovationSub: string;
    ctaMetrics: string;
    ctaProjects: string;
    ctaLinkedin: string;
    techCoreLabel: string;
  };
  impact: {
    badge: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    detailedCaseBadge: string;
    businessImpactTitle: string;
    businessImpactText: string;
    engineeringStrategyTitle: string;
    productionValidation: string;
    productionScale: string;
    stackLabel: string;
    metrics: MetricItemI18n[];
  };
  cases: {
    badge: string;
    title: string;
    subtitle: string;
    problemLabel: string;
    solutionLabel: string;
    keyResultsLabel: string;
    technologiesLabel: string;
    studies: CaseStudyItemI18n[];
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    currentPositionBadge: string;
    clientPrefix: string;
    expandDetailsAria: string;
    responsibilitiesTitle: string;
    items: ExperienceItemI18n[];
  };
  tech: {
    badge: string;
    title: string;
    subtitle: string;
    allAreas: string;
    searchPlaceholder: string;
    toolsCountSuffix: string;
    enterpriseBadge: string;
    activeStatus: string;
    categories: SkillCategoryI18n[];
  };
  educationSection: {
    badge: string;
    title: string;
    subtitle: string;
    officialCertsTitle: string;
    mentorshipTitle: string;
    mentorshipText: string;
    languagesTitle: string;
    mobileSecurityTitle: string;
    mobileSecurityText: string;
    educationItems: EducationItemI18n[];
    languagesList: LanguageProficiencyI18n[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    directEmailLabel: string;
    copyBtn: string;
    copiedBtn: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    copyrightRights: string;
    builtWith: string;
    scrollTopAria: string;
    emailSubject: string;
  };
}
