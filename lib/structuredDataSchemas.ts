// Organization structured data for the company
export const organizationData = {
  name: 'SEMANTICS.WORKS',
  legalName: 'SEMANTICS.WORKS',
  url: 'https://semantics.works',
  logo: 'https://semantics.works/assets/favicon.png',
  description:
    'Professional data platform consultancy specializing in semantic architecture for high-growth eCommerce and agile SMEs.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'DE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'welcome@semantics.works',
    contactType: 'Customer Service',
  },
  sameAs: [
    // Add social media profiles here when available
  ],
  foundingDate: '2024',
  knowsAbout: [
    'Data Architecture',
    'Data Engineering',
    'Semantic Data Modeling',
    'Data Mesh',
    'Cloud Data Warehousing',
    'eCommerce Analytics',
    'Data Platform Consulting',
  ],
  areaServed: {
    '@type': 'Place',
    name: 'Europe',
  },
};

// Service structured data
export const createServiceData = (service: { name: string; description: string }) => ({
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: 'SEMANTICS.WORKS',
    url: 'https://semantics.works',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Europe',
  },
  serviceType: 'Data Platform Consulting',
});

// WebPage structured data
export const createWebPageData = (page: { name: string; description: string; url: string }) => ({
  '@type': 'WebPage',
  name: page.name,
  description: page.description,
  url: page.url,
  publisher: {
    '@type': 'Organization',
    name: 'SEMANTICS.WORKS',
    url: 'https://semantics.works',
  },
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'SEMANTICS.WORKS',
    url: 'https://semantics.works',
  },
});
