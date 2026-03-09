import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MigrationForm from '@/components/forms/MigrationForm';
import { Shield, Clock, Zap } from 'lucide-react';

const MigrationHero = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <Badge className="mb-4">ZERO-DOWNTIME MIGRATION</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Migrate Your WordPress Site
              <span className="text-primary"> Without Losing</span>
              <br />a Single Customer
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional WordPress migration service that guarantees zero downtime, 
              zero data loss, and zero headaches. Your site stays live while we work.
            </p>

            {/* Value Props */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">Zero downtime - your site never goes offline</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">100% data protection with secure backups</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">Complete migration in 24-48 hours</span>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-2">Our Migration Guarantee</h3>
              <p className="text-sm">
                Zero downtime, zero data loss, or you get your money back plus free fixes. 
                We've successfully migrated 500+ sites with a 100% success rate.
              </p>
            </div>

            {/* Social Proof */}
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="font-semibold text-lg mb-2">
                "They migrated our entire e-commerce site without a single minute of downtime. Incredible service."
              </p>
              <p className="text-muted-foreground">
                - David Park, Founder of SportTech Gear
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:pl-8">
            <div className="bg-background border rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Get Your Migration Quote</h2>
                <p className="text-muted-foreground">
                  Free consultation and custom migration plan
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <Badge variant="secondary">Free Quote</Badge>
                  <Badge variant="secondary">24-48hr Delivery</Badge>
                  <Badge variant="secondary">No Downtime</Badge>
                </div>
              </div>
              
              <MigrationForm />
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>SSL certificates and security maintained</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>30-day post-migration support included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationHero;


