export interface CompanyTimeline {
  year: string;
  title: string;
  description: string;
  milestone: string;
  type: 'founding' | 'growth' | 'achievement' | 'expansion';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  experience: string;
  bio: string;
  color: string; // For geometric avatar generation
}

export interface CompanyValues {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CompanyStats {
  projects: number;
  clients: number;
  experience: number;
  satisfaction: number;
}

export const companyTimeline: CompanyTimeline[] = [
  {
    year: "2008",
    title: "Agency Genesis Founded",
    description: "Started as a boutique WordPress development studio with a vision to create exceptional web experiences.",
    milestone: "First WordPress project completed",
    type: "founding"
  },
  {
    year: "2010",
    title: "Team Expansion",
    description: "Grew to a team of 5 developers and designers, establishing our core development methodology.",
    milestone: "10+ successful projects delivered",
    type: "growth"
  },
  {
    year: "2012",
    title: "Enterprise Focus",
    description: "Shifted focus to enterprise WordPress solutions and custom plugin development.",
    milestone: "First enterprise client onboarded",
    type: "expansion"
  },
  {
    year: "2014",
    title: "Performance Innovation",
    description: "Pioneered advanced caching and optimization techniques that became industry standard.",
    milestone: "Page speed breakthrough - sub-1s loads",
    type: "achievement"
  },
  {
    year: "2016",
    title: "E-commerce Mastery",
    description: "Became WooCommerce specialists, developing custom solutions for major retail brands.",
    milestone: "100+ e-commerce sites launched",
    type: "expansion"
  },
  {
    year: "2018",
    title: "Cloud Integration",
    description: "Integrated AWS and cloud technologies, offering scalable hosting and deployment solutions.",
    milestone: "99.99% uptime achieved",
    type: "achievement"
  },
  {
    year: "2020",
    title: "Remote Excellence",
    description: "Adapted to remote work, improving our collaboration tools and client communication processes.",
    milestone: "100% remote productivity maintained",
    type: "growth"
  },
  {
    year: "2022",
    title: "Modern Stack Evolution",
    description: "Integrated headless CMS, React, and modern JavaScript frameworks while maintaining WordPress expertise.",
    milestone: "First headless WordPress project",
    type: "achievement"
  },
  {
    year: "2023",
    title: "AI & Automation",
    description: "Implemented AI-powered tools for content optimization and automated testing procedures.",
    milestone: "AI-enhanced development workflow",
    type: "achievement"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "alex-founder",
    name: "Alex Rivera",
    role: "Founder & Lead Developer",
    expertise: ["WordPress", "Full-Stack Development", "System Architecture", "Team Leadership"],
    experience: "10+ years",
    bio: "Passionate about creating scalable WordPress solutions that drive business growth. Led development of 200+ successful projects.",
    color: "#3B82F6"
  },
  {
    id: "sarah-design",
    name: "Sarah Kim",
    role: "Creative Director",
    expertise: ["UI/UX Design", "Brand Identity", "User Research", "Design Systems"],
    experience: "12+ years",
    bio: "Specializes in creating intuitive user experiences that convert visitors into customers. Professional designer with agency background.",
    color: "#8B5CF6"
  },
  {
    id: "mike-backend",
    name: "Mike Johnson",
    role: "Senior Backend Developer",
    expertise: ["PHP", "MySQL", "API Development", "Performance Optimization"],
    experience: "10+ years",
    bio: "Expert in building robust, scalable backend systems. Focuses on performance optimization and security best practices.",
    color: "#10B981"
  },
  {
    id: "elena-frontend",
    name: "Elena Rodriguez",
    role: "Frontend Specialist",
    expertise: ["React", "TypeScript", "Modern CSS", "Accessibility"],
    experience: "8+ years",
    bio: "Creates beautiful, accessible frontend experiences. Passionate about modern web technologies and performance.",
    color: "#F59E0B"
  },
  {
    id: "james-devops",
    name: "James Chen",
    role: "DevOps Engineer",
    expertise: ["AWS", "Docker", "CI/CD", "Monitoring"],
    experience: "9+ years",
    bio: "Ensures reliable, scalable deployment and hosting solutions. Maintains 99.99% uptime across all client projects.",
    color: "#EF4444"
  },
  {
    id: "lisa-pm",
    name: "Lisa Thompson",
    role: "Project Manager",
    expertise: ["Agile Methodology", "Client Relations", "Quality Assurance", "Team Coordination"],
    experience: "11+ years",
    bio: "Ensures projects are delivered on time and exceed client expectations. Masters complex project coordination and communication.",
    color: "#EC4899"
  }
];

export const companyValues: CompanyValues[] = [
  {
    id: "performance-first",
    title: "Performance First",
    description: "Every website we build is optimized for speed, reliability, and scalability from day one.",
    icon: "Zap"
  },
  {
    id: "client-success",
    title: "Client Success",
    description: "Your business goals drive our technical decisions. We measure success by your growth.",
    icon: "Target"
  },
  {
    id: "quality-code",
    title: "Quality Code",
    description: "Clean, maintainable, and secure code that stands the test of time and scales with your business.",
    icon: "Code"
  },
  {
    id: "transparent-process",
    title: "Transparent Process",
    description: "Clear communication, regular updates, and honest timelines throughout every project.",
    icon: "Eye"
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning",
    description: "We stay current with the latest technologies and best practices to deliver cutting-edge solutions.",
    icon: "BookOpen"
  },
  {
    id: "long-term-partnership",
    title: "Long-term Partnership",
    description: "We build relationships, not just websites. Your long-term success is our commitment.",
    icon: "Handshake"
  }
];

export const companyStats: CompanyStats = {
  projects: 247,
  clients: 156,
  experience: 15,
  satisfaction: 98
};

export const skillsData = [
  { skill: "WordPress Development", proficiency: 98 },
  { skill: "Performance Optimization", proficiency: 96 },
  { skill: "E-commerce Solutions", proficiency: 94 },
  { skill: "Custom Theme Development", proficiency: 97 },
  { skill: "Plugin Development", proficiency: 93 },
  { skill: "SEO Optimization", proficiency: 91 },
  { skill: "Security Implementation", proficiency: 95 },
  { skill: "Cloud Deployment", proficiency: 89 }
];



