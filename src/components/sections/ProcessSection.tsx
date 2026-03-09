import React from 'react';
import { Card } from '@/components/ui/card';
import { Search, Lightbulb, Code2, Rocket, Shield, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, technical requirements, and user needs to craft a comprehensive project roadmap.",
    icon: Search,
    duration: "1-2 weeks",
    deliverables: ["Technical audit", "Strategy document", "Project timeline", "Resource planning"]
  },
  {
    step: "02", 
    title: "Design & Architecture",
    description: "Creating pixel-perfect designs and robust technical architecture that balances aesthetics with performance.",
    icon: Lightbulb,
    duration: "2-3 weeks",
    deliverables: ["UI/UX designs", "Technical specifications", "Performance requirements", "Security protocols"]
  },
  {
    step: "03",
    title: "Development & Integration", 
    description: "Expert development using best practices, with continuous testing and integration to ensure flawless execution.",
    icon: Code2,
    duration: "4-8 weeks",
    deliverables: ["Custom development", "Third-party integrations", "Performance optimization", "Quality assurance"]
  },
  {
    step: "04",
    title: "Launch & Optimization",
    description: "Seamless deployment with comprehensive testing, followed by performance monitoring and optimization.",
    icon: Rocket,
    duration: "1 week",
    deliverables: ["Production deployment", "Performance testing", "SEO optimization", "Analytics setup"]
  },
  {
    step: "05",
    title: "Security & Maintenance",
    description: "Ongoing security monitoring, regular updates, and proactive maintenance to ensure peak performance.",
    icon: Shield,
    duration: "Ongoing",
    deliverables: ["Security monitoring", "Regular updates", "Performance reports", "Backup management"]
  },
  {
    step: "06",
    title: "Growth & Scaling",
    description: "Continuous optimization and feature enhancement to support your business growth and evolving needs.",
    icon: TrendingUp,
    duration: "Ongoing",
    deliverables: ["Growth analytics", "Feature enhancements", "Scaling strategies", "Performance optimization"]
  }
];

const ProcessSection = () => {
  return (
    <section className="py-32 gradient-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-success/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Proven
            <span className="block text-gradient">Development Process</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            A systematic approach refined over 10+ years, ensuring every project delivers exceptional results on time and within budget.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="p-8">
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-sm font-medium text-primary">
                        {step.duration}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16 p-8 glass rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Transparent Communication Throughout
          </h3>
          <p className="text-muted-foreground mb-6">
            Stay informed with weekly progress reports, real-time project dashboards, and direct access to your dedicated project manager.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <span>Weekly progress reports</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Real-time project dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warning"></div>
              <span>Dedicated project manager</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>24/7 support access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;


