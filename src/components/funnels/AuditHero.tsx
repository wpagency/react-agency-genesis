import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AuditForm from '@/components/forms/AuditForm';
import { Shield, Search, TrendingUp } from 'lucide-react';

const AuditHero = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <Badge className="mb-4">FREE WORDPRESS AUDIT</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Discover What's
              <span className="text-primary"> Secretly Sabotaging</span>
              <br />Your WordPress Site
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get a comprehensive 47-point security, performance, and SEO audit that reveals 
              hidden issues costing you traffic, sales, and search rankings.
            </p>

            {/* Value Props */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">Uncover security vulnerabilities before hackers do</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">Find performance issues slowing down your site</span>
              </div>
              <div className="flex items-center gap-3">
                <Search className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">Identify SEO problems hurting your rankings</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <p className="font-semibold text-lg mb-2">
                "This audit revealed 12 critical issues we had no idea existed. Fixed them and our traffic increased 67% in 30 days."
              </p>
              <p className="text-muted-foreground">
                - Jennifer Walsh, CEO at TechFlow Solutions
              </p>
            </div>

            {/* Urgency */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <p className="text-sm">
                <strong>⚠️ Important:</strong> Every day your site has hidden issues, you're losing potential customers to competitors. 
                Get your free audit now and start fixing problems today.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:pl-8">
            <div className="bg-background border rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Get Your Free Audit Report</h2>
                <p className="text-muted-foreground">
                  Complete analysis delivered within 24 hours
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <Badge variant="secondary">100% Free</Badge>
                  <Badge variant="secondary">No Obligations</Badge>
                  <Badge variant="secondary">24hr Delivery</Badge>
                </div>
              </div>
              
              <AuditForm />
              
              <div className="text-center mt-6 text-sm text-muted-foreground">
                <p>🔒 Your information is secure and will never be shared</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditHero;


