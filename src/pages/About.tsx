import React from 'react';
import SEOHead from '@/components/common/SEOHead';
import { pageSEO } from '@/lib/content/seo';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { TimelineChart } from '@/components/charts/TimelineChart';
import { SkillsRadarChart } from '@/components/charts/SkillsRadarChart';
import { StatsCounter } from '@/components/charts/StatsCounter';
import { GeometricAvatar } from '@/components/common/GeometricAvatar';
import { companyTimeline, teamMembers, companyValues, companyStats, skillsData } from '@/lib/content/company';
import { 
  Code, 
  Target, 
  Eye, 
  BookOpen, 
  Handshake, 
  Zap,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Code,
  Target,
  Eye,
  BookOpen,
  Handshake,
  Zap
};

const About = () => {
  const statsData = [
    { 
      label: "Projects Completed", 
      value: companyStats.projects, 
      suffix: "+",
      description: "Successful deliveries"
    },
    { 
      label: "Happy Clients", 
      value: companyStats.clients, 
      suffix: "+",
      description: "Long-term partnerships"
    },
    { 
      label: "Years Experience", 
      value: companyStats.experience, 
      suffix: "+",
      description: "WordPress expertise"
    },
    { 
      label: "Client Satisfaction", 
      value: companyStats.satisfaction, 
      suffix: "%",
      description: "5-star ratings"
    }
  ];

  return (
    <>
      <SEOHead data={pageSEO.about} path="/about" />
      <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-hero py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                About Agency Genesis
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Crafting Digital Excellence 
                <span className="text-accent-light"> Since 2008</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                We're a team of passionate WordPress experts who believe that great websites 
                drive great businesses. For over 15 years, we've been helping companies 
                transform their digital presence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/case-studies">
                    View Our Work
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Impact</Badge>
              <h2 className="text-4xl font-bold mb-4">Numbers That Tell Our Story</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Over 15 years of dedication to WordPress excellence has resulted in measurable success
              </p>
            </div>
            <StatsCounter stats={statsData} />
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Journey</Badge>
              <h2 className="text-4xl font-bold mb-4">15 Years of Innovation</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From a small studio to a leading WordPress agency - here's how we've grown
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <TimelineChart data={companyTimeline} />
            </div>
          </div>
        </section>

        {/* Skills & Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Skills Radar */}
              <div>
                <div className="text-center mb-8">
                  <Badge variant="outline" className="mb-4">Core Expertise</Badge>
                  <h2 className="text-3xl font-bold mb-4">What We Excel At</h2>
                  <p className="text-muted-foreground">
                    Our team's collective expertise across the WordPress ecosystem
                  </p>
                </div>
                <SkillsRadarChart data={skillsData} />
              </div>

              {/* Team Grid */}
              <div>
                <div className="text-center mb-8">
                  <Badge variant="outline" className="mb-4">Meet the Team</Badge>
                  <h2 className="text-3xl font-bold mb-4">The People Behind the Code</h2>
                  <p className="text-muted-foreground">
                    Talented individuals who bring your vision to life
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {teamMembers.map((member) => (
                    <Card key={member.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <GeometricAvatar name={member.name} size="lg" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                            <p className="text-primary font-medium text-sm">{member.role}</p>
                            <p className="text-muted-foreground text-sm mt-1">{member.experience}</p>
                            <p className="text-muted-foreground text-xs mt-3 leading-relaxed">
                              {member.bio}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-3">
                              {member.expertise.slice(0, 2).map((skill, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Values</Badge>
              <h2 className="text-4xl font-bold mb-4">What Drives Us</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide every project and partnership
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {companyValues.map((value) => {
                const IconComponent = iconMap[value.icon as keyof typeof iconMap];
                return (
                  <Card key={value.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">Ready to Start?</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Whether you need a complete website overhaul or just want to optimize your current site, 
                we're here to help you achieve your digital goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
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

export default About;



