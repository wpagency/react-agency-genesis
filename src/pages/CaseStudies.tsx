import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layout/Layout';
import { CaseStudyCard } from '@/components/common/CaseStudyCard';
import { TestimonialCard } from '@/components/common/TestimonialCard';
import { PerformanceChart } from '@/components/charts/PerformanceChart';
import { StatsCounter } from '@/components/charts/StatsCounter';
import { caseStudies, featuredCaseStudies, caseStudyStats, industries } from '@/lib/content/case-studies';
import { testimonials } from '@/lib/content/testimonials';
import { 
  Filter, 
  TrendingUp, 
  Users, 
  Award, 
  Target,
  ArrowRight,
  BarChart3,
  Zap,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const allTags = ['all', ...Array.from(new Set(caseStudies.flatMap(cs => cs.tags)))];
  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.tags.some(tag => tag.toLowerCase() === selectedIndustry));

  const featuredTestimonials = testimonials.filter(t => t.featured);

  const statsData = [
    { 
      label: "Total Projects", 
      value: 200, 
      suffix: "+",
      description: "Successful deliveries"
    },
    { 
      label: "Years Experience", 
      value: 15, 
      suffix: "+",
      description: "WordPress expertise"
    },
    { 
      label: "Client Satisfaction", 
      value: caseStudyStats.clientSatisfaction, 
      suffix: "%",
      description: "5-star ratings"
    },
    { 
      label: "On-Time Delivery", 
      value: caseStudyStats.onTimeDelivery, 
      suffix: "%",
      description: "Project completion"
    }
  ];

  // Get selected case study for detailed view
  const selectedCaseStudy = selectedCase ? caseStudies.find(cs => cs.id === selectedCase) : null;

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-hero py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Case Studies
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Real Results for 
                <span className="text-accent-light"> Real Businesses</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Discover how we've helped companies transform their digital presence 
                and achieve measurable business growth through WordPress excellence.
              </p>
              <div className="flex items-center justify-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>156% Avg Growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>47+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>98% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Impact</Badge>
              <h2 className="text-4xl font-bold mb-4">Success by the Numbers</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Every project tells a story of growth, optimization, and digital transformation
              </p>
            </div>
            <StatsCounter stats={statsData} />
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Featured Work</Badge>
              <h2 className="text-4xl font-bold mb-4">Spotlight Projects</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our most impactful projects that showcase the power of strategic WordPress development
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredCaseStudies.slice(0, 2).map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  {...caseStudy}
                  onViewDetails={setSelectedCase}
                />
              ))}
            </div>

            {/* Performance Chart for Featured Case */}
            {featuredCaseStudies[0] && (
              <div className="max-w-4xl mx-auto">
                <PerformanceChart 
                  data={featuredCaseStudies[0].results}
                  title={`${featuredCaseStudies[0].client} - Performance Transformation`}
                />
              </div>
            )}
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Complete Portfolio</Badge>
              <h2 className="text-4xl font-bold mb-4">All Case Studies</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Browse our complete portfolio of successful WordPress projects across various industries
              </p>
            </div>

            {/* Industry Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                  className="capitalize"
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </Button>
              ))}
            </div>

            {/* Case Studies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  {...caseStudy}
                  onViewDetails={setSelectedCase}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Client Stories</Badge>
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real feedback from real clients who've experienced the Agency Genesis difference
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  {...testimonial}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Technologies & Approach */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Approach</Badge>
              <h2 className="text-4xl font-bold mb-4">Technology Stack & Methodology</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The tools and processes that enable our success
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Technologies We Master</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudyStats.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Industries */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <span>Industries We Serve</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudyStats.industries.map((industry, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm font-medium">{industry}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Ready to Start?
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Your Success Story Starts Here
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Join the ranks of successful businesses who've transformed their digital presence 
                with our expert WordPress development services.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Detail Modal/Section - if needed */}
        {selectedCaseStudy && (
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedCase(null)}
                  className="mb-8"
                >
                  ← Back to All Cases
                </Button>
                
                <Card>
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div>
                        <Badge variant="outline" className="mb-4">{selectedCaseStudy.industry}</Badge>
                        <h2 className="text-3xl font-bold mb-4">{selectedCaseStudy.title}</h2>
                        <p className="text-xl text-muted-foreground mb-6">{selectedCaseStudy.client}</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-4">Challenge</h3>
                          <p className="text-muted-foreground leading-relaxed">{selectedCaseStudy.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-4">Solution</h3>
                          <p className="text-muted-foreground leading-relaxed">{selectedCaseStudy.solution}</p>
                        </div>
                      </div>

                      <PerformanceChart 
                        data={selectedCaseStudy.results}
                        title="Complete Results Breakdown"
                      />

                      {selectedCaseStudy.testimonial && (
                        <Card className="bg-muted/30">
                          <CardContent className="p-6">
                            <blockquote className="text-lg italic mb-4">
                              "{selectedCaseStudy.testimonial.quote}"
                            </blockquote>
                            <div className="text-right">
                              <div className="font-semibold">{selectedCaseStudy.testimonial.author}</div>
                              <div className="text-sm text-muted-foreground">{selectedCaseStudy.testimonial.role}</div>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default CaseStudies;



