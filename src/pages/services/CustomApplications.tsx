import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/common/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Database, Globe, Smartphone, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CustomApplications = () => {
  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored web applications built from scratch to meet your specific business requirements."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Optimized database architecture for scalability and performance."
    },
    {
      icon: Globe,
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first applications that work perfectly on all devices."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimized code and caching strategies."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security measures to protect your data and users."
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", 
    "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs", "Redis"
  ];

  return (
    <Layout>
      <SEOHead 
        data={{
          title: "Custom Web Applications Development | Expert Solutions",
          description: "Build custom web applications tailored to your business needs. Full-stack development with modern technologies, scalable architecture, and seamless user experience.",
          keywords: ["custom web applications", "full-stack development", "React development", "Node.js", "custom software"]
        }}
        path="/services/custom-applications"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Custom Web Applications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your business with custom web applications designed and built specifically for your needs. 
            From concept to deployment, we create scalable, secure, and high-performance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Development Process</CardTitle>
            <CardDescription className="text-center">
              From idea to implementation, we follow a proven methodology
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Discovery", description: "Understanding your requirements and business goals" },
                { step: "2", title: "Design", description: "Creating wireframes, mockups, and technical architecture" },
                { step: "3", title: "Development", description: "Building your application with regular updates and feedback" },
                { step: "4", title: "Launch", description: "Deployment, testing, and ongoing support" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Build Your Custom Application?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a solution that drives your business forward.
          </p>
          <Button size="lg" asChild>
            <Link to="/get-quote">
              Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CustomApplications;


