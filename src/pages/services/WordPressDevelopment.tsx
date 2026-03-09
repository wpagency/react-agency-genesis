import React from 'react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/common/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Database, Zap, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomWordPressSolutions = () => {
  const seoData = {
    title: 'Custom WordPress Development Services | Tailored Solutions | Agency Genesis',
    description: 'Professional custom WordPress development. Custom themes, plugins, API integrations, and database optimization tailored to your business needs.',
    keywords: [
      'custom WordPress development',
      'WordPress custom solutions',
      'custom WordPress themes',
      'custom WordPress plugins',
      'WordPress API integration',
      'bespoke WordPress development'
    ],
    ogType: 'website' as const,
    twitterCard: 'summary_large_image' as const
  };

  const features = [
    "Custom plugin development",
    "Bespoke theme creation", 
    "API integrations",
    "Database optimization",
    "Performance enhancement",
    "Security hardening"
  ];

  const packages = [
    {
      name: "Consultation",
      price: "Free",
      description: "Initial assessment and project scoping",
      features: [
        "Requirements analysis",
        "Technical feasibility review",
        "Project timeline estimate",
        "Cost estimation"
      ]
    },
    {
      name: "Custom Plugin",
      price: "From $1,997",
      description: "Tailored WordPress functionality",
      features: [
        "Custom plugin development",
        "Admin interface design",
        "Database integration",
        "Documentation included"
      ]
    },
    {
      name: "Complete Solution",
      price: "Custom Quote",
      description: "Full custom WordPress application",
      features: [
        "Custom theme development",
        "Plugin development",
        "API integrations",
        "Performance optimization"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project plan"
    },
    {
      step: "2", 
      title: "Design & Architecture",
      description: "Design the solution architecture and user experience"
    },
    {
      step: "3",
      title: "Development",
      description: "Build your custom WordPress solution using best practices"
    },
    {
      step: "4",
      title: "Testing & Launch",
      description: "Thorough testing, deployment, and documentation delivery"
    }
  ];

  return (
    <>
      <SEOHead data={seoData} path="/services/custom-wordpress-solutions" />
      <Layout>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="gradient-hero py-20 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                  Custom Solutions
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  Custom WordPress 
                  <span className="text-accent-light"> Solutions</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                  Tailored WordPress functionality built specifically for your business needs. 
                  No compromises, just perfect solutions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link to="/case-studies">View Examples</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What We Build */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Our Expertise</Badge>
                <h2 className="text-4xl font-bold mb-4">What We Build</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Custom WordPress solutions designed specifically for your business requirements
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>Custom Plugins</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Bespoke functionality that integrates seamlessly with your WordPress site.
                    </p>
                    <ul className="space-y-2">
                      {["Business logic implementation", "Admin interfaces", "Public-facing features", "API integrations"].map((item, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-success mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>Database Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Custom database structures and optimizations for complex data needs.
                    </p>
                    <ul className="space-y-2">
                      {["Custom post types", "Advanced meta fields", "Query optimization", "Data migration"].map((item, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-success mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>API Integrations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Connect your WordPress site with third-party services and applications.
                    </p>
                    <ul className="space-y-2">
                      {["REST API development", "Third-party integrations", "Webhook handling", "Data synchronization"].map((item, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-success mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Development Process */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Our Process</Badge>
                <h2 className="text-4xl font-bold mb-4">Development Process</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Professional development methodology ensuring quality results
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {process.map((item, index) => (
                  <Card key={index} className="relative hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Packages */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Pricing</Badge>
                <h2 className="text-4xl font-bold mb-4">Investment Packages</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Transparent pricing for custom WordPress development solutions
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {packages.map((pkg, index) => (
                  <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${index === 1 ? 'ring-2 ring-primary' : ''}`}>
                    {index === 1 && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{pkg.name}</CardTitle>
                      <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                      <p className="text-muted-foreground text-sm">{pkg.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-success mr-3" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={index === 1 ? "primary" : "outline"} asChild>
                        <Link to="/contact">
                          {pkg.name === "Consultation" ? "Get Started" : "Request Quote"}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Ready for Your Custom Solution?
                </h2>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  Let's discuss your requirements and create a WordPress solution that perfectly fits your business needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link to="/case-studies">View Our Work</Link>
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

export default CustomWordPressSolutions;



