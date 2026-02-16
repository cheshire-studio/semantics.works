
export interface Work {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  details: string[];
}

export enum Page {
  Home = 'home',
  Work = 'work',
  Services = 'services',
  About = 'about',
  Imprint = 'imprint',
  Privacy = 'privacy'
}
