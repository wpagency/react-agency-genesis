import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  ArrowRightLeft, 
  Shield, 
  Clock,
  ArrowRight,
  Server,
  Globe,
  Database,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WordPressMigration = () => {
  const migrationTypes = [
    {
      title: "Host to Host Migration",
      description: "Move your WordPress site between hosting providers",
      icon: Server,
      color: "text-blue-500"
    },
    {
      title: "Domain Changes",
      description: "Change your domain while preserving SEO and functionality",
      icon: Globe,
      color: "text-green-500"
    },
    {
      title: "Development to Production",
      description: "Launch your staging site to live production environment",
      icon: Database,
      color: "text-purple-500"
    },
    {
      title: "Platform Migrations",
      description: "Move from other platforms to WordPress",
      icon: ArrowRightLeft,
      color: "text-orange-500"
    }
  ];

  const migrationProcess = [
    {
      step: 1,
      title: "Pre-Migration Analysis",
      description: "Complete site assessment and migration planning"
    },
    {
      step: 2,
      title: "Staging Setup",
      description: "Create safe testing environment for migration"
    },
    {
      step: 3,
      title: "Content Migration",
      description: "Transfer files, database, and all settings"
    },
    {
      step: 4,
      title: "Testing & Validation",
      description: "Thorough testing to ensure everything works"
    },
    {
      step: 5,
      title: "Go Live",
      description: "Seamless transition with zero downtime"
    }
  ];

  const guarantees = [
    {
      title: "Zero Downtime",
      description: "Your site stays online during the entire migration process",
      icon: Clock
    },
    {
      title: "Complete Backup",
      description: "Full backup of your site before any changes are made",
      icon: Shield
    },
    {
      title: "SEO Preservation",
      description: "Maintain your search rankings and traffic",
      icon: Zap
    },
    {
      title: "SSL Setup",
      description: "Security certificates properly configured",
      icon: CheckCircle
    }
  ];

  const pricing = [
    {
      name: "Simple Migration",
      price: "$497",
      description: "Basic WordPress site migration",
      features: [
        "Single WordPress site",
        "Up to 5GB content",
        "Basic plugins & themes",
        "SSL certificate setup",
        "Post-migration support"
      ]
    },
    {
      name: "Complex Migration",
      price: "$997",
      description: "Advanced sites with custom configurations",
      features: [
        "Custom themes & plugins",
        "E-commerce functionality",
        "Multiple domains/subdomains",
        "Database optimization",
        "Performance tuning"
      ]
    },
    {
      name: "Enterprise Migration",
      price: "$1,997+",
      description: "Large-scale and multi-site migrations",
      features: [
        "Multiple WordPress sites",
        "Custom integrations",
        "Load balancing setup",
        "CDN configuration",
        "Dedicated support team"
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
                WordPress Migration
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Zero Downtime 
                <span className="text-accent-light"> WordPress Migration</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Safe, seamless WordPress site moves with professional expertise. Move your site without losing traffic or data.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Start Your Migration
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/case-studies">View Migration Success</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Types */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Migration Types We Handle</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Professional WordPress migration services for every scenario
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className={`w-8 h-8 ${type.color}`} />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Migration Process</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A proven 5-step process ensuring successful WordPress migrations
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {migrationProcess.map((item, index) => (
                <div key={index} className="flex items-start space-x-6 mb-8 last:mb-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {index < migrationProcess.length - 1 && (
                    <div className="w-px h-16 bg-border ml-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Guarantees */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Migration Guarantees</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Professional WordPress migration with complete peace of mind
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{guarantee.title}</h3>
                      <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Migration Pricing</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Transparent pricing for professional WordPress migration services
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
                      <Link to="/contact">Start Migration</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Migration Success
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                How We Migrated 15 Sites Without Any Downtime
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-white/90 mb-6">
                    A digital agency needed to migrate 15 client WordPress sites to new hosting with custom configurations. 
                    Our staged migration process achieved zero downtime and improved performance across all sites.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-accent-light">15</div>
                      <div className="text-sm">Sites Migrated</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-accent-light">0</div>
                      <div className="text-sm">Minutes Downtime</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-accent-light">44%</div>
                      <div className="text-sm">Faster Loading</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-accent-light">2</div>
                      <div className="text-sm">Weeks Timeline</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <blockquote className="text-lg italic mb-4">
                    "Migrating 15 client sites seemed impossible without downtime. Agency Genesis made it look easy with their professional process."
                  </blockquote>
                  <div className="text-right">
                    <div className="font-semibold">Amanda Foster</div>
                    <div className="text-sm text-white/70">Agency Owner</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/case-studies">
                    Read Full Case Study
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Migrate CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Migrate Your WordPress Site?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss your migration needs and create a plan that ensures zero downtime and improved performance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get Migration Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WordPressMigration;



