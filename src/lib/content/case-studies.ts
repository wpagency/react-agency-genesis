export interface CaseStudyResult {
  metric: string;
  before: number;
  after: number;
  improvement: string;
  unit: string;
}

export interface CaseStudyMetrics {
  performance: number;
  conversion: number;
  traffic: number;
  satisfaction: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  clientType: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  timeline: string;
  tags: string[];
  technologies: string[];
  featured: boolean;
  metrics: CaseStudyMetrics;
  image?: string;
  testimonial?: {
    content: string;
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ecommerce-performance",
    title: "E-commerce Site Performance Transformation",
    client: "Growing Online Retailer",
    clientType: "E-commerce",
    industry: "E-commerce",
    description: "Complete performance optimization for an online retail platform struggling with slow loading times and poor conversion rates.",
    challenge: "Site loading slowly (8+ seconds), high bounce rate, losing customers at checkout",
    solution: "Complete performance optimization including caching setup, image optimization, database cleanup, and code optimization",
    results: [
      {
        metric: "Page Load Time",
        before: 8.0,
        after: 2.1,
        improvement: "75%",
        unit: "s"
      },
      {
        metric: "Bounce Rate",
        before: 65,
        after: 35,
        improvement: "46%",
        unit: "%"
      },
      {
        metric: "Conversion Rate",
        before: 2.1,
        after: 2.9,
        improvement: "40%",
        unit: "%"
      }
    ],
    timeline: "1 week",
    tags: ["Performance", "E-commerce", "Optimization"],
    technologies: ["WordPress", "WooCommerce", "Redis Cache", "CDN", "Image Optimization"],
    featured: true,
    metrics: {
      performance: 95,
      conversion: 85,
      traffic: 78,
      satisfaction: 92
    },
    testimonial: {
      content: "Agency Genesis transformed our struggling online store into a speed demon. Sales increased immediately after the optimization.",
      quote: "Agency Genesis transformed our struggling online store into a speed demon. Sales increased immediately after the optimization.",
      author: "Jennifer Martinez",
      role: "E-commerce Manager"
    }
  },
  {
    id: "security-breach-recovery",
    title: "Emergency Security Breach Recovery",
    client: "Professional Services Firm",
    clientType: "Professional Services",
    industry: "Professional Services",
    description: "Emergency response and complete security overhaul following a critical WordPress security breach with malware infection.",
    challenge: "WordPress site hacked, malware detected, Google warnings displayed, client data potentially compromised",
    solution: "Complete malware removal, security hardening, monitoring setup, and vulnerability patching",
    results: [
      {
        metric: "Recovery Time",
        before: 0,
        after: 6,
        improvement: "100%",
        unit: " hours"
      },
      {
        metric: "Security Score",
        before: 20,
        after: 95,
        improvement: "375%",
        unit: "%"
      },
      {
        metric: "Monitoring Coverage",
        before: 0,
        after: 100,
        improvement: "100%",
        unit: "%"
      }
    ],
    timeline: "24 hours",
    tags: ["Security", "Emergency", "Recovery"],
    technologies: ["WordPress Security", "Malware Removal", "Firewall", "Security Monitoring", "SSL"],
    featured: true,
    metrics: {
      performance: 88,
      conversion: 75,
      traffic: 82,
      satisfaction: 96
    },
    testimonial: {
      content: "When our site was compromised, Agency Genesis responded immediately. They had us back online securely within hours.",
      quote: "When our site was compromised, Agency Genesis responded immediately. They had us back online securely within hours.",
      author: "Robert Kim",
      role: "Managing Partner"
    }
  },
  {
    id: "complex-migration",
    title: "Complex Multi-site Migration",
    client: "Digital Agency Network",
    clientType: "Digital Agency",
    industry: "Digital Agency",
    description: "Large-scale migration of 15 WordPress sites with custom configurations, ensuring zero downtime and improved performance.",
    challenge: "Moving 15 WordPress sites to new hosting with custom configurations, zero downtime requirement",
    solution: "Staged migration process with comprehensive testing, DNS management, and performance optimization",
    results: [
      {
        metric: "Sites Migrated",
        before: 0,
        after: 15,
        improvement: "100%",
        unit: " sites"
      },
      {
        metric: "Downtime",
        before: 240,
        after: 0,
        improvement: "100%",
        unit: " minutes"
      },
      {
        metric: "Performance",
        before: 3.2,
        after: 1.8,
        improvement: "44%",
        unit: "s"
      }
    ],
    timeline: "2 weeks",
    tags: ["Migration", "Multi-site", "Zero Downtime"],
    technologies: ["WordPress Multisite", "DNS Management", "Load Balancing", "Performance Optimization", "Staging"],
    featured: true,
    metrics: {
      performance: 92,
      conversion: 88,
      traffic: 85,
      satisfaction: 94
    },
    testimonial: {
      content: "Migrating 15 client sites seemed impossible without downtime. Agency Genesis made it look easy.",
      quote: "Migrating 15 client sites seemed impossible without downtime. Agency Genesis made it look easy.",
      author: "Amanda Foster",
      role: "Agency Owner"
    }
  }
];

export const featuredCaseStudies = caseStudies.slice(0, 3);

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};

export const getCaseStudiesByTag = (tag: string): CaseStudy[] => {
  return caseStudies.filter(study => study.tags.includes(tag));
};

// Case study statistics and company data
export const caseStudyStats = {
  clientSatisfaction: 98,
  onTimeDelivery: 95,
  technologies: [
    "WordPress Core",
    "WooCommerce", 
    "React/Vue.js",
    "PHP/MySQL",
    "REST APIs",
    "Custom Plugins",
    "Performance Optimization",
    "Security Hardening"
  ],
  industries: [
    "E-commerce",
    "Healthcare", 
    "Education",
    "Professional Services",
    "Non-profit",
    "SaaS",
    "Real Estate",
    "Manufacturing"
  ]
};

// Industry filter options
export const industries = ['all', ...caseStudyStats.industries.map(i => i.toLowerCase())];



