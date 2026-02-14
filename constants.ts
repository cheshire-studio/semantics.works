
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Luxury BI Architecture',
    category: 'High-End Retail',
    image: '/assets/project_01.png',
    description: 'Developed and managed a full DWH/BI department for a luxury eCommerce leader. Architected the end-to-end reporting ecosystem that scaled analytical capabilities within the premium segment.',
    tags: ['Luxury Retail', 'Architecture', 'Strategy']
  },
  {
    id: '02',
    title: 'Ethereal CRM Evolution',
    category: 'Botanical Intelligence',
    image: '/assets/project_02.png',
    description: 'Architecting a next-generation CRM engine utilizing LLMs for a leading lifestyle floral eCommerce. Seamlessly migrating complex operational data into BigQuery for automated, customer-centric journeys.',
    tags: ['AI CRM', 'BigQuery', 'Lifecycle']
  },
  {
    id: '03',
    title: 'High-Precision Campaign Logic',
    category: 'Fashion Systems',
    image: '/assets/project_03.png',
    description: 'Weaving data into the fabric of fashion retail. Automated closed-loop feedback between global campaign performance and architectural data products for a premium giant.',
    tags: ['Campaign Automation', 'Fashion Data', 'Customer Hub']
  },
  {
    id: '04',
    title: 'Hybrid Commerce Architecture',
    category: 'B2C & B2B Ecosystems',
    image: '/assets/project_04.png',
    description: 'Bridging B2C agility and B2B complexity. Architected a unified data infrastructure for a leading electronics provider, optimizing the entire value chain from logistics to checkout.',
    tags: ['Data Platform Strategy', 'Omnichannel', 'Cloud Native']
  },
  {
    id: '05',
    title: 'Omnichannel Fabric Intelligence',
    category: 'Premium Bodywear',
    image: '/assets/project_05.png',
    description: 'Engineered a multi-layered data warehouse specializing in premium retail models. Integrated diverse touchpoints to drive analysis of the premium customer lifecycle.',
    tags: ['Retail Science', 'BigQuery', 'DWH Architecture']
  },
  {
    id: '06',
    title: 'Premium Lifestyle Intelligence',
    category: 'Luxury Fashion Leadership',
    image: '/assets/project_06.png',
    description: 'Established the strategic BI Roadmap for a major European fashion house. Unified design, supply chain, and retail analytics into a high-fidelity architectural source of truth.',
    tags: ['BI Roadmap', 'Leadership', 'Architecture']
  }
];

export const CLIENT_LOGOS = [
  "ZALANDO", "STYLEBOP", "PIXUM", "SHIRTINATOR", "BLUME2000", "CALIDA", "INTERSPORT", "BRACK ALLTRON", "MARC O'POLO", "ROCKET INTERNET", "DAWANDA"
];

export const SERVICES: Service[] = [
  {
    title: 'Foundational Advisory',
    description: 'We clarify the "Why". Before engineering begins, we bridge the gap between business pain and technical architecture through rigorous requirements engineering and strategic alignment.',
    details: ['Requirements Engineering', 'Business Case & ROI Discovery', 'Hiring & Team Advisory', 'Technical Specifications']
  },
  {
    title: 'Data Platform Strategy',
    description: 'We design the blueprints. From platform-level strategy to modern cloud-native environments that solve technical debt and structural bottlenecks.',
    details: ['Strategy', 'Data Architecture', 'Architecture Audits']
  },
  {
    title: 'Data Engineering',
    description: 'We build the engines. Robust, automated data platforms that turn raw operational noise into high-fidelity data products for every business vertical.',
    details: ['Data Modeling', 'Automated Pipelines', 'Cloud Native Engineering']
  },
  {
    title: 'Consumer Intelligence',
    description: 'We drive the action. Implementing strategic modeling and AI-powered systems that generate measurable business value through deep customer insights.',
    details: ['Lifecycle Intelligence', 'Strategic AI Integration', 'Closed-Loop Analytics']
  }
];
