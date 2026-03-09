import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, TrendingUp, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: "E-Commerce Platform Transformation",
    client: "Global Retail Corp",
    industry: "E-Commerce",
    challenge: "Legacy platform causing 60% cart abandonment",
    solution: "Complete WordPress + WooCommerce rebuild with advanced performance optimization",
    results: [
      { metric: "85%", label: "Faster Load Times", icon: Zap },
      { metric: "340%", label: "Conversion Increase", icon: TrendingUp },
      { metric: "99.9%", label: "Uptime Achieved", icon: Shield }
    ],
    image: "photo-1556742049-0cfed4f6a45d",
    tags: ["WooCommerce", "Performance", "Security"],
    href: "/case-studies/global-retail-transformation"
  },
  {
    title: "Enterprise SaaS Migration",
    client: "TechFlow Solutions",
    industry: "SaaS",
    challenge: "Complex legacy system migration without downtime",
    solution: "Seamless WordPress migration with custom API integrations",
    results: [
      { metric: "0", label: "Downtime Hours", icon: Shield },
      { metric: "50%", label: "Faster Page Speed", icon: Zap },
      { metric: "200%", label: "Lead Generation", icon: TrendingUp }
    ],
    image: "photo-1460925895917-afdab827c52f",
    tags: ["Migration", "API Integration", "Enterprise"],
    href: "/case-studies/techflow-migration"
  }
];

const CaseStudiesPreview = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Proven Results in
            <span className="block text-gradient">Every Project</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Real transformations that drive measurable business growth. See how we've helped industry leaders overcome their biggest WordPress challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Hero Image */}
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                <img 
                  src={`https://images.unsplash.com/${study.image}?w=800&h=400&fit=crop&auto=format`}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <div className="glass px-3 py-1 rounded-full text-xs font-medium text-foreground">
                    {study.industry}
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Title & Client */}
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground font-medium mb-4">
                  {study.client}
                </p>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, resultIndex) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={resultIndex} className="text-center p-3 rounded-xl bg-gradient-to-br from-primary/5 to-transparent">
                        <IconComponent className="w-5 h-5 text-primary mx-auto mb-2" />
                        <div className="text-lg font-bold text-foreground">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-all duration-300" 
                  asChild
                >
                  <Link to={study.href}>
                    Read Full Case Study
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button size="lg" className="gradient-primary text-white font-semibold px-10 py-6 shadow-glow hover:shadow-xl transition-all duration-300" asChild>
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;


