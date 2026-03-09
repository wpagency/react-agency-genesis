
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Code2,
    title: "Enterprise WordPress Development",
    description: "Custom WordPress solutions that scale from startup to Enterprise",
    features: [
      "Custom architecture handling 1M+ pageviews",
      "Sub-1s load times guaranteed", 
      "API-first headless implementations",
      "Zero-downtime deployment pipelines"
    ],
    metric: "340% faster",
    proof: "Avg client improvement",
    href: "/services/wordpress-development",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Zap,
    title: "WordPress Emergency Rescue",
    description: "When seconds count, we deliver. Critical issue resolution in under 2 hours",
    features: [
      "47-minute average response time",
      "Disaster recovery in 2 hours max",
      "Security breach containment & cleanup",
      "100% data restoration guarantee"
    ],
    metric: "<2hr recovery",
    proof: "SLA guaranteed",
    href: "/services/wordpress-emergency-help",
    gradient: "from-warning/20 to-warning/5"
  },
  {
    icon: Shield,
    title: "WordPress Care & Maintenance",
    description: "Proactive monitoring and maintenance that prevents problems before they happen",
    features: [
      "99.99% uptime SLA with monitoring",
      "Automated security patches & updates",
      "Performance optimization & caching",
      "Monthly security & performance reports"
    ],
    metric: "99.99% uptime",
    proof: "3-year track record",
    href: "/services/wordpress-maintenance",
    gradient: "from-success/20 to-success/5"
  }
];

const PremiumServices = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium mb-6 border-primary/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
            <span className="text-foreground">50+ Enterprise companies trust our WordPress expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Enterprise WordPress
            <span className="block text-gradient">Solutions That Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
            From rapid development to emergency rescue to bulletproof maintenance-we deliver WordPress 
            solutions with concrete guarantees and measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-0 bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:shadow-glow transition-all duration-500 hover:-translate-y-3 hover-lift`}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Icon & Metric Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="glass px-3 py-1 rounded-lg border border-primary/20">
                      <div className="text-sm font-bold text-primary">{service.metric}</div>
                      <div className="text-xs text-muted-foreground">{service.proof}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover:animate-glow"></div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-all duration-300 glass border border-primary/20" 
                    asChild
                  >
                    <Link to={service.href}>
                      Get Started Today
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Dynamic Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-lg"></div>
              </Card>
            );
          })}
        </div>

        {/* ROI Promise */}
        <div className="mt-20 glass p-8 rounded-2xl text-center border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Risk-Free Performance Guarantee
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            We're so confident in our work that we guarantee measurable improvements. 
            If we don't deliver the promised results, you don't pay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-primary text-white font-semibold px-8 py-4 shadow-glow hover:shadow-xl" asChild>
              <Link to="/get-quote">
                Get Your Free Consultation & ROI Analysis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              💡 Typical ROI: 340% in 3.2 months
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;




