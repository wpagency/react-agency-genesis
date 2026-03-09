import React from 'react';
import Layout from '@/components/layout/Layout';
import SpeedHero from '@/components/funnels/SpeedHero';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap, TrendingDown, Clock, DollarSign } from 'lucide-react';

const Speed = () => {
  return (
    <Layout>
      <SpeedHero />
      
      {/* Speed Impact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Every Second Costs You Money</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Site speed isn't just about user experience - it directly impacts your bottom line.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingDown className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Conversion Loss</h3>
                <p className="text-2xl font-bold text-destructive mb-2">40%</p>
                <p className="text-sm text-muted-foreground">
                  of visitors abandon sites that take over 3 seconds to load
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <DollarSign className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Revenue Impact</h3>
                <p className="text-2xl font-bold text-destructive mb-2">7%</p>
                <p className="text-sm text-muted-foreground">
                  decrease in conversions for every 100ms delay
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingDown className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold mb-2">SEO Ranking</h3>
                <p className="text-2xl font-bold text-destructive mb-2">-50%</p>
                <p className="text-sm text-muted-foreground">
                  Google ranking penalty for slow loading sites
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Promises */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">PERFORMANCE GUARANTEE</Badge>
            <h2 className="text-3xl font-bold mb-4">Our Speed Optimization Promise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We guarantee to improve your site speed by at least 50% or you don't pay.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Sub-2 Second Load</h3>
                <p className="text-sm text-muted-foreground">
                  We target under 2 seconds for all pages
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Core Web Vitals</h3>
                <p className="text-sm text-muted-foreground">
                  Pass all Google performance metrics
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingDown className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">90+ PageSpeed Score</h3>
                <p className="text-sm text-muted-foreground">
                  Achieve excellent Google PageSpeed rating
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">24-48 Hour Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Fast turnaround without compromising quality
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Optimization Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our 12-Point Speed Optimization</h2>
            <p className="text-muted-foreground text-lg">Comprehensive performance enhancement strategy</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Image Optimization</h4>
                  <p className="text-sm text-muted-foreground">WebP conversion and compression</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Caching Implementation</h4>
                  <p className="text-sm text-muted-foreground">Multi-layer caching strategy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Code Minification</h4>
                  <p className="text-sm text-muted-foreground">CSS, JS, and HTML optimization</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Database Cleanup</h4>
                  <p className="text-sm text-muted-foreground">Remove bloat and optimize queries</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">CDN Setup</h4>
                  <p className="text-sm text-muted-foreground">Global content delivery network</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Lazy Loading</h4>
                  <p className="text-sm text-muted-foreground">Load content as users scroll</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Font Optimization</h4>
                  <p className="text-sm text-muted-foreground">Reduce render-blocking resources</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Plugin Audit</h4>
                  <p className="text-sm text-muted-foreground">Remove slow and unnecessary plugins</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Server Response Time</h4>
                  <p className="text-sm text-muted-foreground">Optimize hosting environment</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Critical CSS</h4>
                  <p className="text-sm text-muted-foreground">Prioritize above-the-fold content</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Mobile Optimization</h4>
                  <p className="text-sm text-muted-foreground">Ensure fast mobile performance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Performance Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Ongoing speed tracking setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real Speed Transformation</h2>
            <p className="text-muted-foreground text-lg">E-commerce site optimization results</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Badge variant="destructive" className="mb-4">BEFORE OPTIMIZATION</Badge>
                <h3 className="font-semibold mb-4">Slow & Losing Sales</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Page Load Speed:</span>
                    <span className="text-2xl font-bold text-destructive">7.8s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">PageSpeed Score:</span>
                    <span className="text-2xl font-bold text-destructive">32/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Bounce Rate:</span>
                    <span className="text-2xl font-bold text-destructive">68%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Conversion Rate:</span>
                    <span className="text-2xl font-bold text-destructive">1.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Monthly Revenue:</span>
                    <span className="text-xl font-bold text-destructive">$18,400</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Badge className="mb-4">AFTER OPTIMIZATION</Badge>
                <h3 className="font-semibold mb-4">Lightning Fast</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Page Load Speed:</span>
                    <span className="text-2xl font-bold text-primary">1.4s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">PageSpeed Score:</span>
                    <span className="text-2xl font-bold text-primary">94/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Bounce Rate:</span>
                    <span className="text-2xl font-bold text-primary">31%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Conversion Rate:</span>
                    <span className="text-2xl font-bold text-primary">3.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Monthly Revenue:</span>
                    <span className="text-xl font-bold text-primary">$41,200</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-xl font-bold text-primary">124% increase in revenue within 30 days</p>
            <p className="text-muted-foreground mt-2">82% faster loading • 208% higher conversions</p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Badge variant="secondary" className="mb-4">SPEED GUARANTEE</Badge>
            <h2 className="text-3xl font-bold mb-4">50% Speed Improvement Promise</h2>
            <p className="text-muted-foreground text-lg mb-8">
              We guarantee to improve your site speed by at least 50% and achieve a PageSpeed score of 90+, 
              or you get your money back plus a free redesign consultation.
            </p>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="font-semibold text-lg">"Our site went from 6 seconds to 1.3 seconds. Sales increased by 180% in the first month."</p>
              <p className="text-sm text-muted-foreground mt-2">- Mark Thompson, FitGear Pro</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Speed;


