import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  AlertTriangle, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight,
  Target,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WordPressTroubleshooting = () => {
  const troubleshootingServices = [
    {
      title: "Site Crashes & Errors",
      description: "White screen of death, 500 errors, database connection issues",
      icon: AlertTriangle,
      color: "text-red-500"
    },
    {
      title: "Performance Issues",
      description: "Slow loading, high resource usage, server timeout issues",
      icon: Zap,
      color: "text-yellow-500"
    },
    {
      title: "Plugin Conflicts",
      description: "Plugin compatibility issues, broken functionality",
      icon: Target,
      color: "text-blue-500"
    },
    {
      title: "Security Vulnerabilities",
      description: "Security patches, vulnerability fixes, hardening",
      icon: Shield,
      color: "text-green-500"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Emergency Assessment",
      description: "Immediate site analysis to identify critical issues"
    },
    {
      step: 2,
      title: "Root Cause Analysis",
      description: "Deep dive to find the real problem, not just symptoms"
    },
    {
      step: 3,
      title: "Professional Fix",
      description: "Implement lasting solution using WordPress best practices"
    },
    {
      step: 4,
      title: "Prevention Plan",
      description: "Recommendations to avoid future issues"
    }
  ];

  const pricing = [
    {
      name: "Emergency Fix",
      price: "$497",
      description: "Critical issues requiring immediate attention",
      features: [
        "24/7 emergency response",
        "Site backup before changes",
        "Complete issue resolution",
        "30-day guarantee"
      ]
    },
    {
      name: "Standard Troubleshooting",
      price: "$297",
      description: "Non-critical issues and optimization",
      features: [
        "Complete site analysis",
        "Issue resolution",
        "Performance check",
        "Prevention recommendations"
      ]
    },
    {
      name: "Performance Optimization",
      price: "$697",
      description: "Comprehensive performance improvements",
      features: [
        "Speed optimization",
        "Database cleanup",
        "Caching setup",
        "Ongoing monitoring"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-hero py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                WordPress Troubleshooting
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Fast WordPress 
                <span className="text-accent-light"> Problem Resolution</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Professional diagnosis and resolution of WordPress issues. Get your site back on track quickly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Get Emergency Help
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Call Now: +1 (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Fix */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What We Fix</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Common WordPress issues that we resolve quickly and professionally
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {troubleshootingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Troubleshooting Process</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A systematic approach to identify and resolve WordPress issues
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Troubleshooting Pricing</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Transparent pricing for professional WordPress troubleshooting services
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <Card key={index} className={`${index === 1 ? 'border-primary shadow-lg scale-105' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                      <div className="text-lg">{plan.name}</div>
                    </CardTitle>
                    <p className="text-center text-muted-foreground text-sm">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={index === 1 ? "primary" : "outline"} asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Spotlight */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Success Story
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                How We Fixed a Critical Site Crash in 2 Hours
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-white/90 mb-6">
                    A professional services firm contacted us when their WordPress site crashed during peak business hours. 
                    Our emergency response team quickly identified a plugin conflict and restored the site with enhanced security.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-accent-light" />
                      <span>Response time: 15 minutes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-accent-light" />
                      <span>Site restored: 2 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-accent-light" />
                      <span>Security enhanced: Included</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <blockquote className="text-lg italic mb-4">
                    "Agency Genesis saved our business day. When our site crashed, they responded immediately and had us back online within hours."
                  </blockquote>
                  <div className="text-right">
                    <div className="font-semibold">Robert Kim</div>
                    <div className="text-sm text-white/70">Managing Partner</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/case-studies">
                    View More Success Stories
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                🚨 WordPress Emergency?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Site down? Critical error? We provide 24/7 emergency WordPress support for urgent issues.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Get Emergency Help Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Call: +1 (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WordPressTroubleshooting;



