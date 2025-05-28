export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TechItem {
  id: string;
  name: string;
  category: 'Web Development' | 'Mobile Development' | 'Automation' | 'E2E Testing' | 'Languages' | 'CI/CD' | 'Testing' | 'Version Control';
}

export interface Industry {
  id: string;
  name: string;
  clients: string[];
  icon: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface NavItem {
  name: string;
  path: string;
}