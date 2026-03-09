import React from 'react';
import Layout from '@/components/layout/Layout';
import AuditHero from '@/components/funnels/AuditHero';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

const Audit = () => {
  return (
    <Layout>
      <AuditHero />
      
      {/* Problem Identification */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Is Your WordPress Site Holding You Back?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Most WordPress sites have hidden issues that cost business owners thousands in lost revenue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Security Vulnerabilities</h3>
                <p className="text-sm text-muted-foreground">
                  73% of WordPress sites have security holes that hackers exploit daily
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Poor Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Slow sites lose 40% of visitors and rank lower in Google
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold mb-2">SEO Issues</h3>
                <p className="text-sm text-muted-foreground">
                  Hidden technical problems prevent your site from ranking well
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">FREE COMPREHENSIVE AUDIT</Badge>
            <h2 className="text-3xl font-bold mb-4">What You'll Discover</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our detailed 47-point audit reveals exactly what's wrong and how to fix it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Security Analysis</h4>
                  <p className="text-sm text-muted-foreground">Complete vulnerability scan and malware detection</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Performance Testing</h4>
                  <p className="text-sm text-muted-foreground">Speed analysis and optimization opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">SEO Technical Review</h4>
                  <p className="text-sm text-muted-foreground">Meta tags, schema markup, and crawlability check</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Plugin & Theme Analysis</h4>
                  <p className="text-sm text-muted-foreground">Compatibility and security assessment</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Mobile Responsiveness</h4>
                  <p className="text-sm text-muted-foreground">Cross-device compatibility testing</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Actionable Recommendations</h4>
                  <p className="text-sm text-muted-foreground">Step-by-step improvement plan with priorities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Example */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real Results From Our Audits</h2>
            <p className="text-muted-foreground text-lg">
              See how we've helped businesses like yours
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Badge variant="destructive" className="mb-4">BEFORE</Badge>
                <h3 className="font-semibold mb-4">E-commerce Site Struggling</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Page Load Speed:</span>
                    <span className="text-destructive font-semibold">8.3 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Score:</span>
                    <span className="text-destructive font-semibold">42/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SEO Score:</span>
                    <span className="text-destructive font-semibold">58/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Revenue:</span>
                    <span className="text-destructive font-semibold">$12,400</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Badge className="mb-4">AFTER</Badge>
                <h3 className="font-semibold mb-4">Optimized & Secure</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Page Load Speed:</span>
                    <span className="text-primary font-semibold">1.8 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Score:</span>
                    <span className="text-primary font-semibold">98/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SEO Score:</span>
                    <span className="text-primary font-semibold">94/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Revenue:</span>
                    <span className="text-primary font-semibold">$28,900</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-primary">133% increase in revenue within 90 days</p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Badge variant="secondary" className="mb-4">100% SATISFACTION GUARANTEE</Badge>
            <h2 className="text-3xl font-bold mb-4">Risk-Free Audit Promise</h2>
            <p className="text-muted-foreground text-lg mb-8">
              If our audit doesn't reveal at least 5 critical issues affecting your site's performance, 
              we'll provide a free consultation to discuss your next steps.
            </p>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="font-semibold text-lg">"This audit saved our business. We had no idea our site had so many hidden problems."</p>
              <p className="text-sm text-muted-foreground mt-2">- Sarah Johnson, TechFlow Solutions</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Audit;


