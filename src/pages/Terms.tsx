import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  FileText, 
  Clock, 
  Scale, 
  ShieldCheck, 
  CreditCard, 
  Users, 
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Mail,
  ArrowRight
} from 'lucide-react';

const Terms = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['overview']);

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

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const tableOfContents = [
    { id: 'overview', title: 'Terms Overview', icon: FileText },
    { id: 'services', title: 'Our Services', icon: Users },
    { id: 'payment', title: 'Payment Terms', icon: CreditCard },
    { id: 'responsibilities', title: 'Responsibilities', icon: ShieldCheck },
    { id: 'liability', title: 'Liability & Warranties', icon: AlertTriangle },
    { id: 'intellectual', title: 'Intellectual Property', icon: Scale },
    { id: 'contact', title: 'Contact & Changes', icon: Mail }
  ];

  const termsData = [
    {
      id: 'overview',
      title: 'Terms Overview',
      icon: FileText,
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg">
            These Terms of Service ("Terms") govern your use of our WordPress development services 
            and website. By engaging our services, you agree to these terms.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <CheckCircle className="w-6 h-6 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Clear Terms</h4>
              <p className="text-sm text-blue-700">No hidden clauses or complex legal language</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <ShieldCheck className="w-6 h-6 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Fair Practice</h4>
              <p className="text-sm text-green-700">Reasonable terms that protect both parties</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <Scale className="w-6 h-6 text-purple-600 mb-2" />
              <h4 className="font-semibold text-purple-800">Legal Compliance</h4>
              <p className="text-sm text-purple-700">Fully compliant with applicable laws</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-yellow-800">Important Note</h4>
                <p className="text-yellow-700 text-sm">
                  Please read these terms carefully before engaging our services. 
                  If you have any questions, contact us before proceeding.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: Users,
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">What We Provide</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Development Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom WordPress theme development</li>
                <li>• Plugin development and customization</li>
                <li>• E-commerce solutions (WooCommerce)</li>
                <li>• Website migration and maintenance</li>
                <li>• Performance optimization</li>
                <li>• Security audits and hardening</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Support Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Technical support and troubleshooting</li>
                <li>• Regular updates and maintenance</li>
                <li>• Backup and recovery services</li>
                <li>• Training and documentation</li>
                <li>• Emergency support (24/7 available)</li>
                <li>• Hosting recommendations and setup</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Service Delivery</h4>
            <p className="text-blue-700 text-sm">
              All services are delivered according to the agreed project timeline and specifications 
              outlined in your project proposal. We maintain regular communication throughout the process.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'payment',
      title: 'Payment Terms',
      icon: CreditCard,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Payment Schedule</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 50% deposit required to start project</li>
                <li>• Milestone payments for larger projects</li>
                <li>• Final 50% due upon project completion</li>
                <li>• Monthly billing for ongoing maintenance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Accepted Methods</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bank transfer (preferred)</li>
                <li>• Credit/Debit cards</li>
                <li>• PayPal</li>
                <li>• Cryptocurrency (Bitcoin, Ethereum)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">Late Payment Policy</h4>
            <p className="text-red-700 text-sm">
              Invoices are due within 30 days. Late payments may incur a 1.5% monthly fee. 
              Accounts 60+ days overdue may result in service suspension.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Refund Policy</h4>
            <p className="text-green-700 text-sm">
              We offer a 100% satisfaction guarantee. If you're not happy with our work, 
              we'll make it right or provide a full refund within 30 days.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'responsibilities',
      title: 'Responsibilities',
      icon: ShieldCheck,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Our Responsibilities</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Deliver quality work on time</li>
                <li>• Maintain confidentiality of your data</li>
                <li>• Provide ongoing support as agreed</li>
                <li>• Follow best practices and standards</li>
                <li>• Communicate regularly about progress</li>
                <li>• Backup and secure your website</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Your Responsibilities</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Provide timely feedback and approvals</li>
                <li>• Supply necessary content and materials</li>
                <li>• Make payments according to schedule</li>
                <li>• Maintain your hosting environment</li>
                <li>• Follow our usage recommendations</li>
                <li>• Report issues promptly</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">Collaboration is Key</h4>
            <p className="text-yellow-700 text-sm">
              Successful projects require collaboration from both parties. Delays in feedback 
              or content provision may affect project timelines and delivery dates.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'liability',
      title: 'Liability & Warranties',
      icon: AlertTriangle,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Our Warranties</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• All work will be free from defects for 90 days</li>
              <li>• Code will follow WordPress best practices</li>
              <li>• Websites will be mobile-responsive</li>
              <li>• All functionality will work as specified</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Limitation of Liability</h4>
            <p className="text-muted-foreground mb-4">
              Our liability is limited to the amount paid for services. We are not responsible for:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Lost profits or business opportunities</li>
              <li>• Indirect or consequential damages</li>
              <li>• Issues caused by third-party services</li>
              <li>• Problems arising from hosting issues</li>
              <li>• Damage from client modifications</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Professional Indemnity</h4>
            <p className="text-blue-700 text-sm">
              We carry professional indemnity insurance to protect both parties. 
              Our liability is limited to the coverage amounts of our insurance policy.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'intellectual',
      title: 'Intellectual Property',
      icon: Scale,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Ownership Rights</h4>
            <p className="text-muted-foreground mb-4">
              Upon full payment, you own all custom code and designs created specifically for your project. However:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Third-party plugins/themes remain under their respective licenses</li>
              <li>• WordPress core remains under GPL license</li>
              <li>• We retain rights to our development frameworks and tools</li>
              <li>• Stock images require separate licensing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Portfolio Rights</h4>
            <p className="text-muted-foreground mb-4">
              We reserve the right to:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Display your website in our portfolio</li>
              <li>• Use screenshots for marketing purposes</li>
              <li>• Reference the project in case studies</li>
              <li>• Include a small credit link (removable)</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Code Guarantee</h4>
            <p className="text-green-700 text-sm">
              All custom code we create is original and doesn't infringe on third-party copyrights. 
              We provide indemnification for any IP issues arising from our work.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact & Changes',
      icon: Mail,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>legal@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="w-4 h-4 text-primary" />
                <span>For terms-related questions</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Changes to Terms</h4>
            <p className="text-muted-foreground mb-4">
              We may update these terms from time to time. When we do:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• We'll notify existing clients via email</li>
              <li>• Changes take effect 30 days after notice</li>
              <li>• Continued use constitutes acceptance</li>
              <li>• You may terminate services if you disagree</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Governing Law</h4>
            <p className="text-blue-700 text-sm">
              These terms are governed by the laws of [Your Jurisdiction]. 
              Any disputes will be resolved through binding arbitration.
            </p>
          </div>
        </div>
      )
    }
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
                Terms of
                <span className="text-accent-light"> Service</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Clear, fair terms that protect both you and us.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Last updated: January 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>12 min read</span>
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
            <div className="lg:col-span-3 space-y-4">
              {termsData.map((section) => (
                <Card key={section.id} data-section={section.id}>
                  <Collapsible 
                    open={expandedSections.includes(section.id)}
                    onOpenChange={() => toggleSection(section.id)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <CardContent className="p-6 hover:bg-muted/30 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <section.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-xl font-bold text-left">{section.title}</h2>
                          </div>
                          {expandedSections.includes(section.id) ? (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                      </CardContent>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="px-6 pb-6">
                        <div className="border-t pt-6">
                          {section.content}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}

              {/* Contact Section */}
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-8 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Questions About These Terms?</h3>
                  <p className="text-muted-foreground mb-6">
                    We're here to help clarify any questions you may have about our terms of service.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg">
                      Contact Legal Team
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg">
                      View Privacy Policy
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Last Updated Notice */}
              <Card className="bg-muted/30">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Terms Last Updated</h3>
                  <p className="text-sm text-muted-foreground">
                    These terms were last updated on January 15, 2024. We'll notify you of any 
                    significant changes via email with 30 days notice.
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

export default Terms;


