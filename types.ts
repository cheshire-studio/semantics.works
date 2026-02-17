export interface Work {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  eli5Description?: string;
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  details: string[];
  eli5Title?: string;
  eli5Description?: string;
  eli5Details?: string[];
}

export enum Page {
  Home = 'home',
  Work = 'work',
  Services = 'services',
  About = 'about',
  Imprint = 'imprint',
  Privacy = 'privacy',
}
