import React from 'react';
import Layout from '@/components/layout/Layout';
import MigrationHero from '@/components/funnels/MigrationHero';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Clock, Zap } from 'lucide-react';

const Migration = () => {
  return (
    <Layout>
      <MigrationHero />
      
      {/* Migration Challenges */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">WordPress Migration Nightmares?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't risk your business with DIY migrations that often result in data loss and extended downtime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-destructive/20">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-destructive">Days of Downtime</h3>
                <p className="text-sm text-muted-foreground">
                  Amateur migrations can take weeks and cost thousands in lost revenue
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-destructive/20">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-destructive">Data Loss Risk</h3>
                <p className="text-sm text-muted-foreground">
                  One wrong move and years of content and customer data vanish
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-destructive/20">
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-destructive">Broken Functionality</h3>
                <p className="text-sm text-muted-foreground">
                  Plugins, themes, and custom code often break during migration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zero-Downtime Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">ZERO-DOWNTIME GUARANTEE</Badge>
            <h2 className="text-3xl font-bold mb-4">Our Proven Migration Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've successfully migrated 500+ WordPress sites with zero data loss and minimal downtime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="font-semibold mb-2">Pre-Migration Audit</h3>
              <p className="text-sm text-muted-foreground">Complete site analysis and backup creation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="font-semibold mb-2">Staging Environment</h3>
              <p className="text-sm text-muted-foreground">Build and test on secure staging server</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="font-semibold mb-2">Seamless Switch</h3>
              <p className="text-sm text-muted-foreground">DNS update with instant propagation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <h3 className="font-semibold mb-2">Post-Migration Testing</h3>
              <p className="text-sm text-muted-foreground">Comprehensive functionality verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Migration Service</h2>
            <p className="text-muted-foreground text-lg">Everything you need for a worry-free migration</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Complete Site Transfer</h4>
                  <p className="text-sm text-muted-foreground">Files, database, media, and configurations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">SSL Certificate Setup</h4>
                  <p className="text-sm text-muted-foreground">Security and SEO protection maintained</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">DNS Management</h4>
                  <p className="text-sm text-muted-foreground">Seamless domain transition</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Email Account Migration</h4>
                  <p className="text-sm text-muted-foreground">No interruption to business communications</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Plugin & Theme Compatibility</h4>
                  <p className="text-sm text-muted-foreground">Full functionality preservation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Performance Optimization</h4>
                  <p className="text-sm text-muted-foreground">Faster loading on new hosting</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">30-Day Support</h4>
                  <p className="text-sm text-muted-foreground">Post-migration monitoring and fixes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Money-Back Guarantee</h4>
                  <p className="text-sm text-muted-foreground">100% satisfaction or full refund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Migration Success</h2>
            <p className="text-muted-foreground text-lg">How we saved a business from migration disaster</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge variant="destructive" className="mb-4">EMERGENCY SITUATION</Badge>
                    <h3 className="text-xl font-bold mb-4">Law Firm's Failed DIY Migration</h3>
                    <p className="text-muted-foreground mb-4">
                      A prestigious law firm attempted to migrate their WordPress site themselves to save money. 
                      After 3 days of downtime and corrupted databases, they called us in panic.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Downtime when they called us:</span>
                        <span className="text-destructive font-semibold">72 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lost client inquiries:</span>
                        <span className="text-destructive font-semibold">47</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Estimated revenue loss:</span>
                        <span className="text-destructive font-semibold">$23,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Badge className="mb-4">OUR SOLUTION</Badge>
                    <h3 className="text-xl font-bold mb-4">Emergency Recovery & Migration</h3>
                    <p className="text-muted-foreground mb-4">
                      We restored their site from backups, completed the migration properly, 
                      and had them back online within 4 hours.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Recovery time:</span>
                        <span className="text-primary font-semibold">4 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Data loss:</span>
                        <span className="text-primary font-semibold">Zero</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional downtime:</span>
                        <span className="text-primary font-semibold">None</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t text-center">
                  <p className="font-semibold text-lg mb-2">"They saved our reputation and our business. Worth every penny."</p>
                  <p className="text-sm text-muted-foreground">- Managing Partner, Morrison & Associates Law Firm</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Badge variant="secondary" className="mb-4">MIGRATION GUARANTEE</Badge>
            <h2 className="text-3xl font-bold mb-4">Zero-Risk Migration Promise</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We guarantee your migration will be completed with zero downtime and zero data loss, 
              or we'll refund your money and fix any issues for free.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-background rounded-lg p-4">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">No Data Loss</p>
                <p className="text-muted-foreground">100% data integrity guaranteed</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">Zero Downtime</p>
                <p className="text-muted-foreground">Site stays live during migration</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">30-Day Support</p>
                <p className="text-muted-foreground">Free post-migration assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Migration;


