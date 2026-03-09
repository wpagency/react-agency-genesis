import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SpeedForm from '@/components/forms/SpeedForm';
import { Zap, TrendingUp, DollarSign } from 'lucide-react';

const SpeedHero = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <Badge className="mb-4">PERFORMANCE GUARANTEE</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Make Your WordPress Site
              <span className="text-primary"> 3x Faster</span>
              <br />in 48 Hours
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional speed optimization that guarantees sub-2 second load times, 
              90+ PageSpeed scores, and measurable increases in conversions and revenue.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center bg-muted/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">50%+</div>
                <div className="text-sm text-muted-foreground">Speed Increase</div>
              </div>
              <div className="text-center bg-muted/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">90+</div>
                <div className="text-sm text-muted-foreground">PageSpeed Score</div>
              </div>
              <div className="text-center bg-muted/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">&lt;2s</div>
                <div className="text-sm text-muted-foreground">Load Time</div>
              </div>
            </div>

            {/* Value Props */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">Increase conversions by up to 200%</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">Boost Google rankings with better Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">Keep visitors engaged with lightning-fast loading</span>
              </div>
            </div>

            {/* Results Callout */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-2">Recent Client Results</h3>
              <p className="text-sm mb-3">
                E-commerce site optimization: 7.8s → 1.4s load time
              </p>
              <p className="text-sm font-semibold text-primary">
                Result: 124% increase in monthly revenue within 30 days
              </p>
            </div>

            {/* Urgency */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <p className="text-sm">
                <strong>⚡ Speed matters:</strong> For every 100ms delay, conversions drop by 7%. 
                Don't let a slow site cost you customers - optimize today.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:pl-8">
            <div className="bg-background border rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Get Speed Analysis & Quote</h2>
                <p className="text-muted-foreground">
                  Free speed test and optimization plan
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <Badge variant="secondary">Free Analysis</Badge>
                  <Badge variant="secondary">48hr Delivery</Badge>
                  <Badge variant="secondary">50% Guarantee</Badge>
                </div>
              </div>
              
              <SpeedForm />
              
              <div className="mt-6 bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">✅ What's Included:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Complete speed audit and report</li>
                  <li>• Image and code optimization</li>
                  <li>• Caching and CDN setup</li>
                  <li>• Database optimization</li>
                  <li>• 30-day performance monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedHero;


