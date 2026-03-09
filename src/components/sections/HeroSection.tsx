import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const heroContent = {
  eyebrow: "Trusted by 500+ Growing Businesses",
  headline: "WordPress Solutions That Scale With Your Business", 
  subheadline: "Custom development, expert maintenance, and growth-focused optimization for companies that demand results.",
  trustBadges: ["99.9% Uptime SLA", "24/7 Expert Support", "Custom Development"],
  primaryCTA: "Start Your Project",
  secondaryCTA: "View Our Work"
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-sm md:text-base uppercase tracking-wider text-primary-foreground/80 mb-4 animate-fade-in">
          {heroContent.eyebrow}
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
          {heroContent.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground animate-fade-in" 
           style={{ animationDelay: '0.3s' }}>
          {heroContent.subheadline}
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" 
             style={{ animationDelay: '0.6s' }}>
          {heroContent.trustBadges.map((badge, index) => (
            <span key={index} className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium text-secondary-foreground">
              {badge}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" 
             style={{ animationDelay: '0.9s' }}>
          <Button size="lg" className="btn-primary" asChild>
            <Link to="/get-quote">
              {heroContent.primaryCTA}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="btn-ghost" asChild>
            <Link to="/portfolio">{heroContent.secondaryCTA}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



