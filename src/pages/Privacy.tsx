import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Clock, 
  FileText, 
  Eye, 
  Lock, 
  Database, 
  Globe, 
  Mail,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Privacy = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.getAttribute('data-section') || '';
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableOfContents = [
    { id: 'overview', title: 'Privacy Overview', icon: Shield },
    { id: 'collection', title: 'Information We Collect', icon: Database },
    { id: 'usage', title: 'How We Use Information', icon: Eye },
    { id: 'sharing', title: 'Information Sharing', icon: Globe },
    { id: 'security', title: 'Data Security', icon: Lock },
    { id: 'rights', title: 'Your Rights', icon: CheckCircle },
    { id: 'contact', title: 'Contact Us', icon: Mail }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Hero Section */}
        <section className="gradient-hero py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Legal
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Privacy
                <span className="text-accent-light"> Policy</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                We take your privacy seriously. Learn how we protect your data.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Last updated: January 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-8">
            
            {/* Table of Contents - Sticky Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all hover:bg-muted/50 ${
                          activeSection === item.id 
                            ? 'bg-primary/10 text-primary border-l-4 border-primary' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{item.title}</span>
                      </button>
                    ))}
                  </nav>
                  
                  <div className="mt-6 pt-6 border-t">
                    <div className="text-sm text-muted-foreground mb-2">Reading Progress</div>
                    <Progress value={readingProgress} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">
                      {Math.round(readingProgress)}% complete
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Privacy Overview */}
              <Card data-section="overview">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Privacy Overview</h2>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground mb-6">
                      At Agency Genesis, we respect your privacy and are committed to protecting your personal data. 
                      This privacy policy explains how we collect, use, and safeguard your information when you 
                      visit our website or use our services.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 my-8">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                        <h4 className="font-semibold text-green-800">GDPR Compliant</h4>
                        <p className="text-sm text-green-700">Full compliance with European data protection laws</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <Lock className="w-6 h-6 text-blue-600 mb-2" />
                        <h4 className="font-semibold text-blue-800">Secure Storage</h4>
                        <p className="text-sm text-blue-700">All data encrypted and securely stored</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <Eye className="w-6 h-6 text-purple-600 mb-2" />
                        <h4 className="font-semibold text-purple-800">Transparent</h4>
                        <p className="text-sm text-purple-700">Clear policies with no hidden practices</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Information We Collect */}
              <Card data-section="collection">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Information We Collect</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Name, email address, and phone number (when provided voluntarily)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Company information and project details</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Communication preferences and history</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Technical Information</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>IP address and browser information</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Pages visited and time spent on site</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Device type and operating system</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card data-section="usage">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">How We Use Information</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Service Delivery</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Respond to your inquiries and requests</li>
                        <li>• Provide project quotes and proposals</li>
                        <li>• Deliver WordPress development services</li>
                        <li>• Communicate project updates and milestones</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Website Improvement</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Analyze site usage and performance</li>
                        <li>• Improve user experience</li>
                        <li>• Optimize content and features</li>
                        <li>• Fix bugs and technical issues</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Information Sharing */}
              <Card data-section="sharing">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Information Sharing</h2>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold text-green-800">We Don't Sell Your Data</h3>
                    </div>
                    <p className="text-green-700">
                      We never sell, rent, or trade your personal information to third parties for marketing purposes.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Limited Sharing</h3>
                    <p className="text-muted-foreground">
                      We may share your information only in these specific circumstances:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• With trusted service providers who help us deliver our services</li>
                      <li>• When required by law or legal process</li>
                      <li>• To protect our rights and the safety of our users</li>
                      <li>• With your explicit consent</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card data-section="security">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Data Security</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Technical Safeguards</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• SSL encryption for all data transmission</li>
                        <li>• Secure servers with regular security updates</li>
                        <li>• Regular backups and disaster recovery</li>
                        <li>• Access controls and authentication</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Operational Security</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Staff training on data protection</li>
                        <li>• Regular security audits and assessments</li>
                        <li>• Incident response procedures</li>
                        <li>• Data retention and deletion policies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card data-section="rights">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Your Rights</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Data Rights</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Right to access your personal data</li>
                        <li>• Right to correct inaccurate information</li>
                        <li>• Right to delete your data</li>
                        <li>• Right to data portability</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Communication Rights</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Opt out of marketing communications</li>
                        <li>• Update your preferences anytime</li>
                        <li>• Request information about data processing</li>
                        <li>• File complaints with authorities</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">How to Exercise Your Rights</h4>
                    <p className="text-blue-700 text-sm">
                      To exercise any of these rights, simply contact us using the information below. 
                      We'll respond to your request within 30 days.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card data-section="contact">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Contact Us</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Privacy Questions</h3>
                      <p className="text-muted-foreground mb-4">
                        If you have any questions about this privacy policy or how we handle your data, 
                        please don't hesitate to contact us.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-primary" />
                          <span>privacy@example.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Globe className="w-4 h-4 text-primary" />
                          <span>Agency Genesis</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                      <Button size="lg" className="w-full mb-4">
                        Email Privacy Team
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" size="lg" className="w-full">
                        View Terms of Service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Last Updated Notice */}
              <Card className="bg-muted/30">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Policy Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    This privacy policy was last updated on January 15, 2024. We may update this policy 
                    from time to time, and we'll notify you of any significant changes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;



