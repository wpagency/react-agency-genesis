import React from 'react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/common/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Clock, AlertTriangle, CheckCircle, Zap, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const WordPressMaintenance = () => {
  const seoData = {
    title: 'WordPress Maintenance Services | 24/7 Professional Support | Agency Genesis',
    description: 'Professional WordPress maintenance services. Updates, backups, security monitoring, and performance optimization. Keep your site secure and optimized.',
    keywords: [
      'WordPress maintenance',
      'WordPress support',
      'WordPress updates',
      'WordPress security monitoring',
      'WordPress backup services',
      'WordPress performance monitoring'
    ],
    ogType: 'website' as const,
    twitterCard: 'summary_large_image' as const
  };

  const maintenancePlans = [
    {
      name: "Essential",
      price: "$97",
      period: "/month",
      description: "Perfect for small websites",
      features: [
        "Monthly WordPress core updates",
        "Plugin & theme updates",
        "Weekly security scans",
        "Monthly backups",
        "Basic performance monitoring",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional", 
      price: "$197",
      period: "/month",
      description: "Ideal for business websites",
      features: [
        "Bi-weekly WordPress updates",
        "Real-time security monitoring",
        "Daily automated backups",
        "Performance optimization",
        "Uptime monitoring (99.9%)",
        "Priority email support",
        "Monthly reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$397", 
      period: "/month",
      description: "For mission-critical sites",
      features: [
        "Weekly WordPress updates",
        "24/7 security monitoring",
        "Real-time backups",
        "Advanced performance tuning",
        "99.99% uptime guarantee",
        "Phone & email support",
        "Detailed analytics",
        "Emergency response"
      ],
      popular: false
    }
  ];

  const maintenanceServices = [
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "24/7 security scanning and threat detection to keep your site safe from attacks."
    },
    {
      icon: Database,
      title: "Automated Backups", 
      description: "Regular automated backups stored securely with easy restoration options."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization to keep your site loading fast."
    },
    {
      icon: Clock,
      title: "Uptime Monitoring",
      description: "Real-time monitoring to ensure your site is always available to visitors."
    },
    {
      icon: AlertTriangle,
      title: "Issue Detection",
      description: "Proactive identification and resolution of potential problems before they impact users."
    },
    {
      icon: CheckCircle,
      title: "Regular Updates",
      description: "Safe WordPress core, plugin, and theme updates to keep everything current."
    }
  ];

  return (
    <>
      <SEOHead data={seoData} path="/services/wordpress-maintenance" />
      <Layout>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="gradient-hero py-20 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                  Maintenance Services
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  WordPress 
                  <span className="text-accent-light"> Maintenance</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                  Professional ongoing support to keep your WordPress site secure, fast, and always online. 
                  Focus on your business while we handle the technical details.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">
                      Choose Your Plan
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link to="/case-studies">See Results</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Complete Care</Badge>
                <h2 className="text-4xl font-bold mb-4">What's Included</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Comprehensive WordPress maintenance services to keep your site running perfectly
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {maintenanceServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Maintenance Plans */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Pricing Plans</Badge>
                <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Transparent pricing for professional WordPress maintenance services
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {maintenancePlans.map((plan, index) => (
                  <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={plan.popular ? "primary" : "outline"} asChild>
                        <Link to="/contact">
                          Choose {plan.name}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  All plans include a 30-day money-back guarantee
                </p>
                <Badge variant="secondary">No Setup Fees • Cancel Anytime</Badge>
              </div>
            </div>
          </section>

          {/* Why Maintenance Matters */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Badge variant="outline" className="mb-4">Why It Matters</Badge>
                  <h2 className="text-4xl font-bold mb-6">
                    WordPress Maintenance is Essential
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    WordPress powers 40% of the web, making it a target for security threats. 
                    Regular maintenance isn't optional-it's essential for business continuity.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Prevent security breaches and hacking attempts",
                      "Maintain optimal site performance and speed", 
                      "Ensure compatibility with latest WordPress versions",
                      "Backup protection against data loss",
                      "Improve search engine rankings"
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-success mr-3" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Security Monitoring</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
                    <p className="text-sm text-muted-foreground">Average Load Time</p>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Daily</div>
                    <p className="text-sm text-muted-foreground">Automated Backups</p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Keep Your WordPress Site Running Perfectly
                </h2>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  Don't wait for problems to occur. Start professional WordPress maintenance today 
                  and enjoy peace of mind knowing your site is in expert hands.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">
                      Start Maintenance Plan
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link to="/get-quote">Get Custom Quote</Link>
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

export default WordPressMaintenance;




