
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechFlow Solutions",
    role: "CEO & Founder",
    content: "Our revenue increased 340% after the site optimization. The new WordPress architecture handles 50,000 daily users flawlessly, and our conversion rate jumped from 2.1% to 8.3%.",
    rating: 5,
    metric: "+$2.3M ARR",
    avatar: "SC",
    industry: "SaaS Technology",
    timeline: "3 months"
  },
  {
    name: "Marcus Rodriguez", 
    company: "Global Commerce Inc",
    role: "Chief Technology Officer",
    content: "When our e-commerce site was attacked, they had us back online in 47 minutes. The security overhaul prevented 15+ subsequent attacks. Zero downtime since implementation.",
    rating: 5,
    metric: "47min recovery",
    avatar: "MR",
    industry: "E-commerce",
    timeline: "Ongoing"
  },
  {
    name: "Jennifer Walsh",
    company: "Meridian Consulting", 
    role: "Managing Partner",
    content: "Three years, zero issues. Load times dropped from 8.2s to 0.9s. Client satisfaction scores improved 60%. The maintenance plan pays for itself through improved SEO rankings alone.",
    rating: 5,
    metric: "60% satisfaction ↑",
    avatar: "JW",
    industry: "Professional Services",
    timeline: "3 years"
  }
];

const stats = [
  { number: "$50M+", label: "Client Revenue Generated", accent: "text-primary", sublabel: "measurable ROI" },
  { number: "0.8s", label: "Average Load Time", accent: "text-success", sublabel: "industry leading" },
  { number: "99.99%", label: "Uptime SLA", accent: "text-warning", sublabel: "guaranteed" },
  { number: "98%", label: "Client Retention", accent: "text-accent", sublabel: "year over year" }
];

const SocialProof = () => {
  return (
    <section className="py-32 gradient-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-success/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass p-8 rounded-2xl hover:shadow-glow transition-all duration-300 group">
              <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.accent} group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-foreground font-semibold mb-1">
                {stat.label}
              </div>
              <div className={`text-sm ${stat.accent} font-medium`}>
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Proven Results,
              <span className="block text-gradient">Real Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's how we've transformed businesses with measurable, 
              revenue-driving WordPress solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-warning" />
                  ))}
                </div>
                
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                
                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed font-light text-base">
                  "{testimonial.content}"
                </p>
                
                {/* Metric Highlight */}
                <div className="glass p-4 rounded-xl mb-6 border border-primary/20">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {testimonial.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.industry} • {testimonial.timeline}
                  </div>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-primary text-xs font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator Teaser */}
        <div className="mt-20 glass p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Calculate Your Potential ROI
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Based on our client data, the average WordPress optimization project pays for itself 
            in 3.2 months through improved conversions and reduced hosting costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300">
              Get Your Custom ROI Report
            </button>
            <button className="glass px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              View Detailed Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;



