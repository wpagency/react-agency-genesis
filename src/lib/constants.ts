// Agency Genesis Brand Constants - Professional WordPress Solutions

export const BRAND = {
  name: "Agency Genesis",
  tagline: "Professional WordPress Solutions",
  domain: "Agency Genesis",
  description: "Agency Genesis brings 10+ years of WordPress expertise to solve your toughest challenges",
  valueProposition: "Professional WordPress solutions backed by 10+ years of expertise",
  
  // Contact Information
  contact: {
    email: "hello@wpagency.xyz",
    phone: "+1 (555) 123-4567",
    address: "123 Digital Avenue, Tech City, TC 12345",
    responseTime: "We respond within 4-8 hours"
  },

  // Company Stats
  stats: {
    yearsExperience: "15+",
    projectsCompleted: "200+",
    clientSatisfaction: "95+",
    successfulMigrations: "Zero failed migrations"
  },

  // Social Media
  social: {
    twitter: "https://twitter.com/wpagencyxyz",
    linkedin: "https://linkedin.com/company/wpagency",
    github: "https://github.com/wpagency.xyz",
    dribbble: "https://dribbble.com/yourhandle"
  }
} as const;

export const NAVIGATION = {
  main: [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" }, 
    { name: "About", href: "/about" },
    { name: "Resources", href: "/blog" }
  ],
  footer: [
    {
      title: "Services",
      links: [
        { name: "WordPress Troubleshooting", href: "/services/wordpress-troubleshooting" },
        { name: "WordPress Migration", href: "/services/wordpress-migration" },
        { name: "Custom WordPress Solutions", href: "/services/custom-wordpress-solutions" },
        { name: "WordPress Maintenance", href: "/services/wordpress-maintenance" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Agency Genesis", href: "/about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Get Quote", href: "/get-quote" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "Get Quote", href: "/get-quote" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ]
} as const;

export const SERVICES = [
  {
    id: "wordpress-development",
    title: "WordPress Website Development",
    description: "Custom WordPress solutions built for scale",
    icon: "Code",
    features: ["Custom themes & plugins", "Performance optimization", "Business integrations"],
    href: "/services/wordpress-development"
  },
  {
    id: "wordpress-emergency-help",
    title: "WordPress Fixes & Emergency Help",
    description: "Rapid response for critical WordPress issues",
    icon: "Zap",
    features: ["24/7 emergency support", "Security breach response", "Site recovery"],
    href: "/services/wordpress-emergency-help"
  },
  {
    id: "wordpress-maintenance",
    title: "WordPress Maintenance",
    description: "Proactive care to keep your site running smoothly",
    icon: "Shield",
    features: ["Regular updates", "Security monitoring", "Performance optimization"],
    href: "/services/wordpress-maintenance"
  },
  {
    id: "retainer-plans",
    title: "Retainer Plans",
    description: "Ongoing WordPress support and development",
    icon: "Calendar",
    features: ["Dedicated developer hours", "Priority support", "Monthly reporting"],
    href: "/services/retainer-plans"
  },
  {
    id: "seo-for-wordpress",
    title: "SEO for WordPress",
    description: "Technical SEO optimization for WordPress sites",
    icon: "Search",
    features: ["Core Web Vitals", "Schema markup", "Performance optimization"],
    href: "/services/seo-for-wordpress"
  },
  {
    id: "wordpress-to-frontend",
    title: "WordPress-to-Frontend (Static/Headless)",
    description: "Modern frontend solutions powered by WordPress",
    icon: "Globe",
    features: ["JAMstack architecture", "Blazing fast performance", "Scalable infrastructure"],
    href: "/services/wordpress-to-frontend"
  },
  {
    id: "custom-applications",
    title: "Custom Applications (WordPress-powered)",
    description: "Enterprise applications with WordPress backend",
    icon: "Layers",
    features: ["API development", "Custom functionality", "Third-party integrations"],
    href: "/services/custom-applications"
  }
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Local Marketing Agency",
    role: "CEO",
    content: "Agency Genesis saved our business when our site was hacked. They responded quickly and had us back online within hours. Professional service from start to finish.",
    avatar: "/testimonials/sarah.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Chen",
    company: "Online Retailer",
    role: "Founder",
    content: "The migration of our e-commerce site was flawless. Agency Genesis handled everything professionally and our new site is faster than ever.",
    avatar: "/testimonials/mike.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    company: "Tech Startup",
    role: "Marketing Director",
    content: "We've worked with Agency Genesis for over two years. Their maintenance service keeps our site running perfectly. Highly recommended.",
    avatar: "/testimonials/lisa.jpg",
    rating: 5
  }
] as const;

export const WHY_CHOOSE_US = [
  {
    id: 1,
    title: "10+ years of WordPress Expertise",
    description: "Deep knowledge of WordPress core, themes, plugins, and best practices",
    icon: "Award"
  },
  {
    id: 2,
    title: "Proven Track Record",
    description: "200+ successful projects across diverse industries and business sizes",
    icon: "TrendingUp"
  },
  {
    id: 3,
    title: "Professional Approach",
    description: "Clear communication, transparent pricing, and results you can measure",
    icon: "Users"
  },
  {
    id: 4,
    title: "Ongoing Support",
    description: "We're here when you need us, with reliable professional support",
    icon: "Headphones"
  }
] as const;

export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Analyze",
    description: "We thoroughly assess your WordPress site, requirements, and goals",
    icon: "Search"
  },
  {
    id: 2,
    title: "Plan",
    description: "Clear strategy and timeline with transparent communication throughout",
    icon: "FileText"
  },
  {
    id: 3,
    title: "Execute",
    description: "Professional implementation using WordPress best practices",
    icon: "Settings"
  },
  {
    id: 4,
    title: "Deliver",
    description: "Quality results with documentation and ongoing support options",
    icon: "CheckCircle"
  }
] as const;



