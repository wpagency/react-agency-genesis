export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
  structuredData?: any;
}

export const seoDefaults = {
  xyz: {
    title: "WordPress Development Agency | Custom Solutions | Agency Genesis", 
    description: "Professional WordPress development, maintenance, and optimization for growing businesses. Custom solutions with 99.9% uptime guarantee.",
    ogImage: "/og-image-xyz.jpg"
  },
  space: {
    title: "WordPress Emergency Help | 24/7 Response | Agency Genesis.space",
    description: "WordPress emergency response team. Site down? Hacked? Broken? We fix WordPress disasters in 2 hours or less. Available 24/7.",
    ogImage: "/og-image-space.jpg"
  }
}

export const baseSEO = {
  siteName: 'Agency Genesis - WordPress Development Experts',
  baseUrl: 'https://example.com',
  defaultImage: seoDefaults.xyz.ogImage,
  twitterHandle: '@agencygenesis',
  locale: 'en_US'
};

export const pageSEO: Record<string, SEOData> = {
  home: {
    title: seoDefaults.xyz.title,
    description: seoDefaults.xyz.description,
    keywords: [
      'WordPress development',
      'WordPress agency',
      'custom WordPress themes',
      'WordPress plugins',
      'WooCommerce development',
      'WordPress migration',
      'WordPress performance optimization',
      'WordPress maintenance',
      'WordPress security'
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Agency Genesis',
      url: 'https://example.com',
      logo: 'https://example.com/assets/wp-agency-logo.png',
      description: 'Professional WordPress development agency specializing in custom solutions.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'Customer Service',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://twitter.com/yourhandle',
        'https://linkedin.com/company/yourcompany',
        'https://github.com/yourorg'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'WordPress Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom WordPress Development',
              description: 'Bespoke WordPress themes and plugins'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'WordPress Migration',
              description: 'Safe and secure WordPress site migrations'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Performance Optimization',
              description: 'WordPress speed and performance improvements'
            }
          }
        ]
      }
    }
  },
  
  audit: {
    title: 'Free WordPress Audit | Performance & Security Analysis | Agency Genesis',
    description: 'Get a comprehensive FREE WordPress audit. We analyze performance, security, SEO, and provide actionable recommendations to improve your site.',
    keywords: [
      'WordPress audit',
      'free WordPress analysis',
      'WordPress performance audit',
      'WordPress security audit',
      'WordPress SEO audit',
      'site health check'
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Free WordPress Audit',
      provider: {
        '@type': 'Organization',
        name: 'Agency Genesis'
      },
      description: 'Comprehensive WordPress site analysis covering performance, security, and SEO.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free WordPress audit service'
      }
    }
  },
  
  migration: {
    title: 'WordPress Migration Services | Safe & Secure Transfers | Agency Genesis',
    description: 'Professional WordPress migration services. Zero downtime, data integrity guaranteed. Migrate from any platform to WordPress or between hosts.',
    keywords: [
      'WordPress migration',
      'site migration service',
      'WordPress transfer',
      'platform migration',
      'host migration',
      'WordPress move'
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image'
  },
  
  speed: {
    title: 'WordPress Speed Optimization | Performance Boost | Agency Genesis',
    description: 'Dramatically improve your WordPress site speed. Core Web Vitals optimization, caching, image optimization, and database cleanup.',
    keywords: [
      'WordPress speed optimization',
      'WordPress performance',
      'Core Web Vitals',
      'site speed improvement',
      'WordPress caching',
      'image optimization'
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image'
  },
  
  about: {
    title: 'About Agency Genesis | WordPress Development Experts Since 2018',
    description: 'Meet the WordPress experts behind Agency Genesis. Our team specializes in custom WordPress solutions for businesses of all sizes.',
    keywords: [
      'WordPress agency team',
      'WordPress developers',
      'WordPress experts',
      'about Agency Genesis'
    ],
    ogType: 'website',
    twitterCard: 'summary'
  },
  
  'case-studies': {
    title: 'WordPress Development Case Studies | Success Stories | Agency Genesis',
    description: 'Explore our WordPress development success stories. Real projects, measurable results, and client testimonials.',
    keywords: [
      'WordPress case studies',
      'WordPress portfolio',
      'WordPress success stories',
      'client testimonials'
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image'
  },
  
  contact: {
    title: 'Contact Agency Genesis | Get Your WordPress Quote Today',
    description: 'Ready to start your WordPress project? Contact our team for a free consultation and custom quote. Available worldwide.',
    keywords: [
      'contact WordPress agency',
      'WordPress consultation',
      'WordPress quote',
      'WordPress project inquiry'
    ],
    ogType: 'website',
    twitterCard: 'summary'
  },
  
  services: {
    title: 'WordPress Services | Professional Development & Support | Agency Genesis',
    description: 'Complete WordPress services: custom development, migrations, troubleshooting, maintenance, and optimization. Professional solutions for your business.',
    keywords: [
      'WordPress services',
      'WordPress development services',
      'WordPress support',
      'WordPress maintenance',
      'WordPress troubleshooting',
      'WordPress migration services'
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'WordPress Services',
      description: 'Professional WordPress development and support services',
      itemListElement: [
        {
          '@type': 'Service',
          name: 'WordPress Troubleshooting',
          description: 'Fast diagnosis and resolution of WordPress issues'
        },
        {
          '@type': 'Service',
          name: 'WordPress Migration',
          description: 'Safe, seamless site moves with zero downtime'
        },
        {
          '@type': 'Service',
          name: 'Custom WordPress Solutions',
          description: 'Tailored WordPress functionality for your business'
        },
        {
          '@type': 'Service',
          name: 'WordPress Maintenance',
          description: 'Ongoing support to keep your site secure and optimized'
        }
      ]
    }
  },
  
  'get-quote': {
    title: 'Get WordPress Development Quote | Custom Project Pricing | Agency Genesis',
    description: 'Get accurate pricing for your WordPress project. Custom quote based on your specific requirements. Response within 24 hours.',
    keywords: [
      'WordPress quote',
      'WordPress pricing',
      'WordPress project cost',
      'custom WordPress quote'
    ],
    ogType: 'website',
    twitterCard: 'summary'
  },
  
  privacy: {
    title: 'Privacy Policy | Data Protection | Agency Genesis',
    description: 'Our privacy policy explains how we collect, use, and protect your personal information. GDPR compliant.',
    keywords: ['privacy policy', 'data protection', 'GDPR'],
    noIndex: true
  },
  
  terms: {
    title: 'Terms of Service | Legal Terms | Agency Genesis',
    description: 'Terms and conditions for using Agency Genesis services. Clear, fair terms that protect both parties.',
    keywords: ['terms of service', 'legal terms', 'service agreement'],
    noIndex: true
  },

  // Service Detail Pages
  'services/wordpress-troubleshooting': {
    title: 'WordPress Troubleshooting Services | Fast Fix Solutions | Agency Genesis',
    description: 'Professional WordPress troubleshooting services. Fast diagnosis and resolution of WordPress issues, performance optimization, and security fixes.',
    keywords: [
      'WordPress troubleshooting',
      'WordPress error fixing',
      'WordPress performance issues',
      'WordPress plugin conflicts',
      'WordPress debug',
      'WordPress emergency fix'
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image'
  },

  'services/wordpress-migration': {
    title: 'WordPress Migration Services | Zero Downtime Moves | Agency Genesis',
    description: 'Professional WordPress migration services. Safe, seamless site moves between hosts with zero downtime guarantee and data integrity.',
    keywords: [
      'WordPress migration',
      'WordPress site transfer',
      'WordPress host migration',
      'WordPress domain migration',
      'WordPress move service',
      'zero downtime migration'
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image'
  },

  'services/custom-wordpress-solutions': {
    title: 'Custom WordPress Development Services | Tailored Solutions | Agency Genesis',
    description: 'Professional custom WordPress development. Custom themes, plugins, API integrations, and database optimization tailored to your business needs.',
    keywords: [
      'custom WordPress development',
      'WordPress custom solutions',
      'custom WordPress themes',
      'custom WordPress plugins',
      'WordPress API integration',
      'bespoke WordPress development'
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image'
  },

  'services/wordpress-maintenance': {
    title: 'WordPress Maintenance Services | 24/7 Professional Support | Agency Genesis',
    description: 'Professional WordPress maintenance services. Updates, backups, security monitoring, and performance optimization. Keep your site secure and optimized.',
    keywords: [
      'WordPress maintenance',
      'WordPress support',
      'WordPress updates',
      'WordPress security monitoring',
      'WordPress backup services',
      'WordPress performance monitoring'
    ],
    ogType: 'website',
    twitterCard: 'summary_large_image'
  }
};

export const generateStructuredData = (type: string, data: any) => {
  const baseStructure = {
    '@context': 'https://schema.org',
    ...data
  };
  
  return JSON.stringify(baseStructure, null, 2);
};

export const getBreadcrumbStructuredData = (items: Array<{name: string, url: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

export const getFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

export const getServiceStructuredData = (service: {
  name: string;
  description: string;
  price?: string;
  currency?: string;
}) => {
  const serviceData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Agency Genesis',
      url: 'https://example.com'
    }
  };

  if (service.price) {
    serviceData.offers = {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: service.currency || 'USD'
    };
  }

  return serviceData;
};



