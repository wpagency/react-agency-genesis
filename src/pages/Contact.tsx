import React, { useState } from 'react';
import SEOHead from '@/components/common/SEOHead';
import { pageSEO } from '@/lib/content/seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/layout/Layout';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Zap,
  CheckCircle,
  ArrowRight,
  Calendar,
  Globe
} from 'lucide-react';
import { BRAND } from '@/lib/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form or show success message
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: BRAND.contact.email,
      description: 'Drop us a line anytime',
      responseTime: 'Within 4 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: BRAND.contact.phone,
      description: 'Mon-Fri, 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: BRAND.contact.address,
      description: 'Schedule an appointment',
      responseTime: 'By appointment'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      value: 'Chat with our team',
      description: 'Available during business hours',
      responseTime: 'Instant'
    }
  ];

  return (
    <>
      <SEOHead data={pageSEO.contact} path="/contact" />
      <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-hero py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Get In Touch
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Let's Build Your 
                <span className="text-accent-light"> Next Project</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Ready to transform your digital presence? Our WordPress experts are here 
                to help you achieve your business goals.
              </p>
              <div className="flex items-center justify-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>4hr Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Quick Start</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Contact Options</Badge>
              <h2 className="text-4xl font-bold mb-4">Choose Your Preferred Way</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Multiple ways to reach us - pick what works best for you
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{method.title}</h3>
                    <p className="text-primary font-medium mb-2">{method.value}</p>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {method.responseTime}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Start Your Project</Badge>
                <h2 className="text-4xl font-bold mb-4">Tell Us About Your Vision</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you within 4 hours
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Project Budget</Label>
                        <Input
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          placeholder="$10,000 - $25,000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project">Project Type</Label>
                      <Input
                        id="project"
                        value={formData.project}
                        onChange={(e) => setFormData({...formData, project: e.target.value})}
                        placeholder="E-commerce site, corporate website, etc."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your project goals, requirements, timeline, and any specific features you need..."
                        className="min-h-32"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Send Project Details'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ/Next Steps */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">What Happens Next?</Badge>
              <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-bold mb-2">Initial Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll review your project and schedule a detailed discussion
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-bold mb-2">Proposal & Timeline</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive a detailed proposal with timeline and pricing
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-bold mb-2">Project Kickoff</h3>
                  <p className="text-sm text-muted-foreground">
                    Begin development with regular updates and milestones
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
    </>
  );
};

export default Contact;


