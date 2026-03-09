import React from 'react';
import { Card } from '@/components/ui/card';

const services = [
  {
    title: "WordPress Website Development",
    description: "Custom WordPress solutions built for scale",
    features: ["Custom themes & plugins", "Performance optimization", "Business integrations"]
  },
  {
    title: "WordPress Fixes & Emergency Help", 
    description: "Rapid response for critical WordPress issues",
    features: ["24/7 emergency support", "Security breach response", "Site recovery"]
  },
  {
    title: "WordPress Maintenance",
    description: "Proactive care to keep your site running smoothly", 
    features: ["Regular updates", "Security monitoring", "Performance optimization"]
  },
  {
    title: "Retainer Plans",
    description: "Ongoing WordPress support and development",
    features: ["Dedicated developer hours", "Priority support", "Monthly reporting"]
  },
  {
    title: "SEO for WordPress",
    description: "Technical SEO optimization for WordPress sites",
    features: ["Core Web Vitals", "Schema markup", "Performance optimization"]
  },
  {
    title: "WordPress-to-Frontend (Static/Headless)",
    description: "Modern frontend solutions powered by WordPress",
    features: ["JAMstack architecture", "Blazing fast performance", "Scalable infrastructure"]
  },
  {
    title: "Custom Applications (WordPress-powered)",
    description: "Enterprise applications with WordPress backend",
    features: ["API development", "Custom functionality", "Third-party integrations"]
  }
]

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive WordPress solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;



