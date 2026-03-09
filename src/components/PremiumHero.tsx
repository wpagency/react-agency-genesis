
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PremiumHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in border-primary/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-foreground">Serving 50+ Enterprise Companies • 500k+ Users Powered Daily</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[0.85] animate-slide-up">
            WordPress that
            <span className="block text-gradient">Performs at Scale</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light" 
             style={{ animationDelay: '0.3s' }}>
            Enterprise-grade WordPress solutions that deliver measurable results. 
            From 0.8s load times to 99.99% uptime – we engineer performance that drives revenue.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" 
               style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-3 glass px-4 py-2 rounded-xl">
              <Shield className="w-5 h-5 text-success" />
              <span className="font-semibold text-foreground">99.99% SLA Guaranteed</span>
            </div>
            <div className="flex items-center gap-3 glass px-4 py-2 rounded-xl">
              <Zap className="w-5 h-5 text-warning" />
              <span className="font-semibold text-foreground">0.8s Average Load</span>
            </div>
            <div className="flex items-center gap-3 glass px-4 py-2 rounded-xl">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">SOC 2 Compliant</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" 
               style={{ animationDelay: '0.9s' }}>
            <Button size="xl" className="gradient-primary text-white font-semibold px-10 py-6 text-lg shadow-glow hover:shadow-xl transition-all duration-300" asChild>
              <Link to="/get-quote">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="xl" className="glass font-medium px-10 py-6 text-lg hover:shadow-lg transition-all duration-300" asChild>
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>

          {/* Performance Metrics */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" 
               style={{ animationDelay: '1.2s' }}>
            <div className="text-center glass p-6 rounded-2xl hover:shadow-glow transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground font-medium">Revenue Generated</div>
              <div className="text-xs text-primary mt-1">for our clients</div>
            </div>
            <div className="text-center glass p-6 rounded-2xl hover:shadow-glow transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-success mb-2">340%</div>
              <div className="text-muted-foreground font-medium">Avg Speed Increase</div>
              <div className="text-xs text-success mt-1">proven results</div>
            </div>
            <div className="text-center glass p-6 rounded-2xl hover:shadow-glow transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-warning mb-2">&lt;2hr</div>
              <div className="text-muted-foreground font-medium">Emergency Response</div>
              <div className="text-xs text-warning mt-1">24/7 availability</div>
            </div>
            <div className="text-center glass p-6 rounded-2xl hover:shadow-glow transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground font-medium">Client Retention</div>
              <div className="text-xs text-accent mt-1">year over year</div>
            </div>
          </div>

          {/* Client Logos & Proof */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <p className="text-sm text-muted-foreground mb-6 font-medium">Powering success for industry leaders worldwide</p>
            <div className="glass p-6 rounded-2xl">
              <div className="flex justify-center items-center gap-8 mb-4 opacity-60 grayscale">
                <div className="w-20 h-6 bg-muted-foreground/30 rounded flex items-center justify-center text-xs font-bold">TECH</div>
                <div className="w-24 h-6 bg-muted-foreground/30 rounded flex items-center justify-center text-xs font-bold">FINANCE</div>
                <div className="w-18 h-6 bg-muted-foreground/30 rounded flex items-center justify-center text-xs font-bold">RETAIL</div>
                <div className="w-22 h-6 bg-muted-foreground/30 rounded flex items-center justify-center text-xs font-bold">HEALTH</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground">Serving enterprises across 15+ industries</div>
                <div className="text-xs text-primary font-semibold mt-1">ISO 27001 Certified • GDPR Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;



