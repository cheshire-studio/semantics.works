import { Work, Service } from './types';

export const WORKS: Work[] = [
  {
    id: '01',
    title: 'Luxury BI Architecture',
    category: 'High-End Retail',
    image: '/assets/project_01.png',
    description:
      'Developed and managed a full DWH/BI department for a luxury eCommerce leader. Architected the end-to-end reporting ecosystem that scaled analytical capabilities within the premium segment.',
    eli5Description:
      'We built the entire data brain for a fancy online shop, so they could see exactly what was selling and why.',
    tags: ['Luxury Retail', 'Architecture', 'Strategy'],
  },
  {
    id: '02',
    title: 'Ethereal CRM Evolution',
    category: 'Botanical Intelligence',
    image: '/assets/project_02.png',
    description:
      'Architecting a next-generation CRM engine utilizing LLMs for a leading lifestyle floral eCommerce. Seamlessly migrating complex operational data into BigQuery for automated, customer-centric journeys.',
    eli5Description:
      'We used AI to help a flower shop personalize every customer interaction, ensuring messages were timely and relevant.',
    tags: ['AI CRM', 'BigQuery', 'Lifecycle'],
  },
  {
    id: '03',
    title: 'High-Precision Campaign Logic',
    category: 'Fashion Systems',
    image: '/assets/project_03.png',
    description:
      'Weaving data into the fabric of fashion retail. Automated closed-loop feedback between global campaign performance and architectural data products for a premium giant.',
    eli5Description:
      'We connected their campaigns to their sales data, so the system run automatically and helped them to learn which campaigns worked best.',
    tags: ['Campaign Automation', 'Fashion Data', 'Customer Hub'],
  },
  {
    id: '04',
    title: 'Hybrid Commerce Architecture',
    category: 'B2C & B2B Ecosystems',
    image: '/assets/project_04.png',
    description:
      'Bridging B2C agility and B2B complexity. Architected a unified data infrastructure for a leading electronics provider, optimizing the entire value chain from logistics to checkout.',
    eli5Description:
      'We built a unified system that handles both direct-to-consumer sales and business partnerships, streamlining the entire operation.',
    tags: ['Data Platform Strategy', 'Omnichannel', 'Cloud Native'],
  },
  {
    id: '05',
    title: 'Omnichannel Fabric Intelligence',
    category: 'Premium Bodywear',
    image: '/assets/project_05.png',
    description:
      'Engineered a multi-layered data warehouse specializing in premium retail models. Integrated diverse touchpoints to drive analysis of the premium customer lifecycle.',
    eli5Description:
      'We collected data from everywhere—stores, websites, apps—and put it all together so they could understand their customers perfectly.',
    tags: ['Retail Science', 'BigQuery', 'DWH Architecture'],
  },
  {
    id: '06',
    title: 'Premium Lifestyle Intelligence',
    category: 'Luxury Fashion Leadership',
    image: '/assets/project_06.png',
    description:
      'Established the strategic BI Roadmap for a major European fashion house. Unified design, supply chain, and retail analytics into a high-fidelity architectural source of truth.',
    eli5Description:
      'We drew the map for a big fashion brand, showing them exactly how to use data to design better clothes and sell them faster.',
    tags: ['BI Roadmap', 'Leadership', 'Architecture'],
  },
];

export const CLIENT_LOGOS = [
  'ZALANDO',
  'STYLEBOP',
  'PIXUM',
  'BLUME2000',
  'CALIDA',
  'ROCKET INTERNET',
  'INTERSPORT',
  'BRACK ALLTRON',
  "MARC O'POLO",
  'SHIRTINATOR',
  'DAWANDA',
];

export const SERVICES: Service[] = [
  {
    title: 'Foundational Advisory',
    description:
      'We clarify the "Why". Before engineering begins, we bridge the gap between business pain and technical architecture through rigorous requirements engineering and strategic alignment.',
    eli5Description:
      "Before we build anything, we sit down with you to figure out exactly what you need and why, so we don't waste time or money.",
    details: [
      'Requirements Engineering',
      'Business Case discovery',
      'Hiring & Team Advisory',
      'Technical Specifications',
    ],
    eli5Details: [
      'Listing what you need',
      'Finding the value',
      'Helping you hire',
      'The blueprints',
    ],
  },
  {
    title: 'Semantic Architecture',
    description:
      'We make data make sense. We design machine-readable, centralized semantic layers that serve as the single source of truth for both humans and AI agents.',
    eli5Description:
      'We organize all your business facts into a clear system that both your people and your AI can understand perfectly.',
    details: [
      'Semantic Modeling',
      'Metric Definition Strategy',
      'Knowledge Graph Basics',
      'AI-Ready Data Contracts',
    ],
    eli5Details: [
      'Business Dictionary',
      'Defining Success',
      'Connecting the Dots',
      'Ready for AI',
    ],
  },
  {
    title: 'Data Engineering     ',
    description:
      'We build the engines. Robust, automated data platforms that turn raw operational noise into high-fidelity data products.',
    eli5Description:
      'We build the strong, automatic pipes that move your data around safely and turn it into something you can actually use.',
    details: [
      'State of the Art Processes',
      'Automated Pipelines',
      'Data Modeling',
      'Cloud Native Systems',
    ],
    eli5Details: [
      'Modern Tools',
      'Automatic Pipes',
      'Organizing Data',
      'Cloud Power',
    ],
  },
  {
    title: 'Agentic Intelligence ',
    description:
      'We drive the action. Implementing AI-powered systems and closed-loop analytics that leverage your semantic layer to generate measurable business value.',
    eli5Description:
      'We build smart AI assistants that use your data to do actual work and help you make more money.',
    details: [
      'LLM Integration',
      'Customer Intelligence',
      'Predictive Modeling',
      'Closed-Loop Feedback',
    ],
    eli5Details: [
      'Connecting AI',
      'Knowing Customers',
      'Predicting Future',
      'Learning Faster',
    ],
  },
];
