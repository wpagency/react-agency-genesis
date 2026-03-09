import React from 'react';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/common/SEOHead';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Calendar, TrendingUp, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "TechRetail Solutions",
      category: "E-commerce",
      description: "Complete redesign and optimization of a WordPress e-commerce platform resulting in 300% performance improvement and doubled conversions.",
      image: "/api/placeholder/600/400",
      technologies: ["WordPress", "WooCommerce", "Custom PHP", "Performance Optimization"],
      results: [
        { metric: "Page Speed", improvement: "+300%" },
        { metric: "Conversion Rate", improvement: "+200%" },
        { metric: "Mobile Performance", improvement: "+250%" }
      ],
      duration: "6 weeks",
      year: "2024",
      featured: true
    },
    {
      id: 2,
      title: "Corporate Website Migration",
      client: "Global Corp Industries",
      category: "Migration",
      description: "Seamless migration from legacy CMS to WordPress with zero downtime and improved content management workflow.",
      image: "/api/placeholder/600/400",
      technologies: ["WordPress", "Custom Migration", "API Integration", "User Management"],
      results: [
        { metric: "Migration Time", improvement: "Zero downtime" },
        { metric: "Content Transfer", improvement: "100% success" },
        { metric: "User Adoption", improvement: "+400%" }
      ],
      duration: "4 weeks",
      year: "2024",
      featured: true
    },
    {
      id: 3,
      title: "SaaS Platform Integration",
      client: "CloudTech Innovations",
      category: "Custom Development",
      description: "Custom WordPress integration with SaaS platform including single sign-on and dynamic content personalization.",
      image: "/api/placeholder/600/400",
      technologies: ["WordPress", "REST API", "Single Sign-On", "Custom Plugins"],
      results: [
        { metric: "User Engagement", improvement: "+123%" },
        { metric: "Session Duration", improvement: "+85%" },
        { metric: "Customer Satisfaction", improvement: "+47%" }
      ],
      duration: "8 weeks",
      year: "2023",
      featured: false
    },
    {
      id: 4,
      title: "Healthcare Portal Development",
      client: "MedCare Solutions",
      category: "Custom Development",
      description: "HIPAA-compliant WordPress portal for patient management with advanced security and custom workflow automation.",
      image: "/api/placeholder/600/400",
      technologies: ["WordPress", "HIPAA Compliance", "Custom Forms", "Security Hardening"],
      results: [
        { metric: "Security Score", improvement: "A+ Rating" },
        { metric: "Patient Satisfaction", improvement: "+156%" },
        { metric: "Administrative Efficiency", improvement: "+89%" }
      ],
      duration: "12 weeks",
      year: "2023",
      featured: true
    },
    {
      id: 5,
      title: "Restaurant Chain Website",
      client: "Gourmet Bistro Group",
      category: "Multi-site",
      description: "WordPress multisite network for restaurant chain with location management and online ordering integration.",
      image: "/api/placeholder/600/400",
      technologies: ["WordPress Multisite", "Location Management", "Online Ordering", "Mobile Optimization"],
      results: [
        { metric: "Online Orders", improvement: "+340%" },
        { metric: "Site Management", improvement: "+75% efficiency" },
        { metric: "Mobile Traffic", improvement: "+290%" }
      ],
      duration: "10 weeks",
      year: "2023",
      featured: false
    },
    {
      id: 6,
      title: "Educational Platform",
      client: "LearnTech Academy",
      category: "LMS",
      description: "Custom learning management system built on WordPress with course delivery and student progress tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["WordPress", "LearnDash", "Custom LMS", "Progress Tracking"],
      results: [
        { metric: "Student Engagement", improvement: "+198%" },
        { metric: "Course Completion", improvement: "+145%" },
        { metric: "Platform Stability", improvement: "99.9% uptime" }
      ],
      duration: "14 weeks",
      year: "2022",
      featured: false
    }
  ];

  const categories = ["All", "E-commerce", "Migration", "Custom Development", "Multi-site", "LMS"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const seoData = {
    title: "Portfolio - WordPress Projects | Agency Genesis",
    description: "View our portfolio of successful WordPress projects including e-commerce platforms, custom development, and enterprise solutions.",
    keywords: ["WordPress portfolio", "web development projects", "e-commerce", "custom WordPress solutions"]
  };

  return (
    <>
      <SEOHead data={seoData} path="/portfolio" />
      <Layout>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
              Our <span className="text-gradient-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Explore our successful WordPress projects and see how we've helped businesses 
              transform their digital presence with measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/case-studies">Detailed Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Filter */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Card 
                  key={item.id}
                  className={`group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    item.featured ? 'lg:col-span-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-primary overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {item.category}
                      </Badge>
                    </div>
                    {item.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 text-white/80 text-sm">
                      {item.year}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-medium mb-2">
                          {item.client}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.duration}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {item.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm text-muted-foreground">{result.metric}</span>
                          <span className="text-sm font-semibold text-primary">{result.improvement}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button variant="outline" className="w-full group">
                      View Project Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Showing {filteredItems.length} of {portfolioItems.length} projects
              </p>
              <Button variant="outline" size="lg">
                Load More Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
                Portfolio Impact
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Measurable results across all our WordPress projects
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-space-grotesk font-bold mb-2">200+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-space-grotesk font-bold mb-2">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-space-grotesk font-bold mb-2">15+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-space-grotesk font-bold mb-2">Zero</div>
                <div className="text-white/80">Failed Projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-foreground mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can create a WordPress solution that delivers 
              measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">View Detailed Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;



