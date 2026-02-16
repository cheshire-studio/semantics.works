import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'Service' | 'Article' | 'WebPage';
  data: Record<string, unknown>;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `structured-data-${type}`;

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(`structured-data-${type}`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [type, data]);

  return null;
};
