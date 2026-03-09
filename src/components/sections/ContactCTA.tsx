import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-12 lg:p-16 text-center">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Ready to Transform
              <span className="block text-gradient">Your WordPress?</span>
            </h2>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Join hundreds of successful businesses who've elevated their digital presence with our premium WordPress solutions.
            </p>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Free Consultation</h3>
                <p className="text-muted-foreground text-sm">Get expert advice tailored to your specific needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">24-Hour Response</h3>
                <p className="text-muted-foreground text-sm">Quick turnaround on all project inquiries</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-warning to-warning/70 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Direct Access</h3>
                <p className="text-muted-foreground text-sm">Speak directly with our senior developers</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                size="xl" 
                className="gradient-primary text-white font-semibold px-12 py-6 text-lg shadow-glow hover:shadow-xl transition-all duration-300" 
                asChild
              >
                <Link to="/get-quote">
                  Start Your Project Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="xl" 
                className="glass font-medium px-12 py-6 text-lg hover:shadow-lg transition-all duration-300" 
                asChild
              >
                <Link to="/contact">
                  Schedule a Call
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>100% satisfaction guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-warning"></div>
                <span>Fixed-price projects available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-success mb-2">500+</div>
            <div className="text-muted-foreground text-sm">Sites Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-warning mb-2">99.9%</div>
            <div className="text-muted-foreground text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;


