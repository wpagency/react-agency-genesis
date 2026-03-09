import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Award, TrendingUp, Users, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    uptime: 0
  });

  const finalValues = {
    experience: 15,
    projects: 200,
    clients: 150,
    uptime: 95
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const incrementCounters = () => {
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

        setCounters({
          experience: Math.floor(finalValues.experience * easeOutProgress),
          projects: Math.floor(finalValues.projects * easeOutProgress),
          clients: Math.floor(finalValues.clients * easeOutProgress),
          uptime: parseFloat((finalValues.uptime * easeOutProgress).toFixed(1))
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(finalValues);
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          incrementCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const target = document.getElementById('why-choose-us');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Award,
      title: "10+ years of WordPress Expertise",
      description: "Deep knowledge of WordPress core, themes, plugins, and best practices",
      stat: `${counters.experience}+`,
      statLabel: "Years",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "200+ successful projects across diverse industries and business sizes",
      stat: `${counters.projects}+`,
      statLabel: "Projects",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Professional Approach",
      description: "Clear communication, transparent pricing, and results you can measure",
      stat: `${counters.uptime}%`,
      statLabel: "Success Rate",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "We're here when you need us, with reliable professional support",
      stat: `${counters.clients}+`,
      statLabel: "Happy Clients",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient-accent">Agency Genesis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise with business understanding to deliver WordPress solutions that drive real results
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group relative p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                {/* Floating Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Animated Progress Ring */}
                  <svg className="absolute inset-0 w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="175.93"
                      strokeDashoffset="175.93"
                      className="group-hover:animate-pulse"
                      style={{
                        animation: 'progress 2s ease-out forwards',
                        animationDelay: `${index * 0.3}s`
                      }}
                    />
                  </svg>
                </div>

                {/* Animated Statistic */}
                <div className="mb-4">
                  <div className="text-3xl font-space-grotesk font-bold text-primary mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-space-grotesk font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect Lines */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent w-0 group-hover:w-full transition-all duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Visual Stats Bar */}
        <div className="mt-16 p-8 bg-gradient-primary rounded-2xl text-white animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-space-grotesk font-bold mb-2">200+</div>
              <div className="text-sm opacity-80">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-space-grotesk font-bold mb-2">15+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-space-grotesk font-bold mb-2">95%</div>
              <div className="text-sm opacity-80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-space-grotesk font-bold mb-2">Zero</div>
              <div className="text-sm opacity-80">Failed Migrations</div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for progress animation */}
      <style>{`
        @keyframes progress {
          from {
            stroke-dashoffset: 175.93;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;



