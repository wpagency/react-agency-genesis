import React from 'react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/common/SEOHead';
import { pageSEO } from '@/lib/content/seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SERVICES } from '@/lib/constants';
import { ArrowRight, CheckCircle, Code, Zap, Shield, Calendar, Search, Globe, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Code: Code,
  Zap: Zap,
  Shield: Shield,
  Calendar: Calendar,
  Search: Search,
  Globe: Globe,
  Layers: Layers,
};

const Services = () => {
  return (
    <>
      <SEOHead data={pageSEO.services} path="/services" />
      <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-hero py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Our Services
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                WordPress Solutions 
                <span className="text-accent-light"> That Work</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Complete WordPress services designed to solve your challenges and grow your business online.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                      </div>
                      <Badge variant="outline">{service.title}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full group">
                      <Link to={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )})}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Every business is unique. Let's discuss your specific WordPress needs and create a tailored solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/get-quote">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
    </>
  );
};

export default Services;


