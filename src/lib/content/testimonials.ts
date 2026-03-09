export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  project: string;
  industry: string;
  results: {
    metric: string;
    improvement: string;
  }[];
  timeline: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "TechGear Plus",
    role: "CEO & Founder",
    content: "Agency Genesis completely transformed our e-commerce platform. What impressed me most was their attention to performance optimization and user experience. Our revenue tripled in the first quarter after launch, and our customers consistently praise how fast and intuitive the new site is.",
    rating: 5,
    project: "E-commerce Platform Rebuild",
    industry: "Technology Retail",
    results: [
      { metric: "Revenue Growth", improvement: "180%" },
      { metric: "Page Speed", improvement: "83%" },
      { metric: "Conversion Rate", improvement: "133%" }
    ],
    timeline: "3 months",
    featured: true
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "CloudFlow Analytics",
    role: "VP of Marketing",
    content: "The team at Agency Genesis didn't just build us a website, they built us a complete lead generation machine. The integration with our CRM and the automated nurture sequences have revolutionized our sales process. We're now getting 4x more qualified leads.",
    rating: 5,
    project: "SaaS Marketing Platform",
    industry: "Software/SaaS",
    results: [
      { metric: "Lead Quality", improvement: "191%" },
      { metric: "Trial Conversions", improvement: "183%" },
      { metric: "Organic Traffic", improvement: "300%" }
    ],
    timeline: "2.5 months",
    featured: true
  },
  {
    id: 3,
    name: "Dr. Elena Martinez",
    company: "Green Future Foundation",
    role: "Executive Director",
    content: "As a non-profit, every dollar matters to us. Agency Genesis delivered a fundraising platform that not only looks professional but actually works. Our online donations have increased by over 250%, and managing volunteers is now effortless.",
    rating: 5,
    project: "Nonprofit Fundraising Platform",
    industry: "Non-Profit",
    results: [
      { metric: "Monthly Donations", improvement: "256%" },
      { metric: "Volunteer Sign-ups", improvement: "316%" },
      { metric: "Donor Retention", improvement: "129%" }
    ],
    timeline: "3.5 months",
    featured: true
  },
  {
    id: 4,
    name: "Giuseppe Marinelli",
    company: "Bella Vista Restaurants",
    role: "Owner",
    content: "Managing 15 restaurant locations was a nightmare before Agency Genesis stepped in. Now everything is centralized, our brand is consistent, and online orders have exploded. The mobile experience alone has brought us hundreds of new customers.",
    rating: 5,
    project: "Multi-Location Restaurant Portal",
    industry: "Food & Hospitality",
    results: [
      { metric: "Online Orders", improvement: "353%" },
      { metric: "Management Time Saved", improvement: "80%" },
      { metric: "Mobile Performance", improvement: "187%" }
    ],
    timeline: "4 months",
    featured: false
  },
  {
    id: 5,
    name: "Jennifer Walsh",
    company: "MedCare Partners",
    role: "Practice Manager",
    content: "The patient portal and appointment booking system that Agency Genesis built for us has streamlined our entire practice. Patient satisfaction scores have increased dramatically, and our staff can focus on care instead of paperwork.",
    rating: 5,
    project: "Healthcare Patient Portal",
    industry: "Healthcare",
    results: [
      { metric: "Patient Satisfaction", improvement: "89%" },
      { metric: "Booking Efficiency", improvement: "156%" },
      { metric: "Administrative Time", improvement: "67%" }
    ],
    timeline: "2 months",
    featured: false
  },
  {
    id: 6,
    name: "David Thompson",
    company: "EduTech Solutions",
    role: "CTO",
    content: "We needed a learning management system that could scale with our growing student base. Agency Genesis delivered a robust platform that handles thousands of concurrent users without breaking a sweat. The performance optimization is outstanding.",
    rating: 5,
    project: "Learning Management System",
    industry: "Education Technology",
    results: [
      { metric: "User Capacity", improvement: "400%" },
      { metric: "Load Time", improvement: "78%" },
      { metric: "Student Engagement", improvement: "124%" }
    ],
    timeline: "5 months",
    featured: false
  },
  {
    id: 7,
    name: "Amanda Foster",
    company: "Premier Real Estate",
    role: "Marketing Director",
    content: "Our property showcase website needed to stand out in a competitive market. Agency Genesis created an immersive experience with virtual tours and advanced search functionality. Lead generation has increased by 200%.",
    rating: 5,
    project: "Real Estate Showcase Platform",
    industry: "Real Estate",
    results: [
      { metric: "Lead Generation", improvement: "200%" },
      { metric: "Property Views", improvement: "167%" },
      { metric: "User Engagement", improvement: "145%" }
    ],
    timeline: "3 months",
    featured: false
  },
  {
    id: 8,
    name: "Robert Kim",
    company: "FinanceFlow",
    role: "Product Manager",
    content: "Security and performance were our top priorities for our financial platform. Agency Genesis exceeded expectations on both fronts while delivering an intuitive user interface. The compliance features saved us months of development time.",
    rating: 5,
    project: "Financial Services Platform",
    industry: "Financial Technology",
    results: [
      { metric: "Security Score", improvement: "94%" },
      { metric: "Transaction Speed", improvement: "189%" },
      { metric: "User Adoption", improvement: "234%" }
    ],
    timeline: "4.5 months",
    featured: false
  }
];

export const testimonialStats = {
  averageRating: 5.0,
  totalTestimonials: 47,
  averageImprovement: 178,
  recommendationRate: 100,
  repeatClientRate: 89
};



