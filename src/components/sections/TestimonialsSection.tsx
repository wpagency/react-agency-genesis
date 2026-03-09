import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Agency Genesis transformed our online presence completely. Their custom WordPress solution perfectly matched our business needs, and the performance improvements were immediately noticeable. Our site speed increased by 300% and conversions doubled within the first month.",
      rating: 5,
      avatar: {
        initials: "SJ",
        color: "from-blue-500 to-purple-600"
      },
      metrics: [
        { label: "Site Speed", value: "+300%" },
        { label: "Conversions", value: "+200%" }
      ]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Creative Director", 
      company: "Design Studio Pro",
      content: "Outstanding work on our portfolio website. The attention to detail and performance optimization is impressive. They delivered exactly what we envisioned while adding technical expertise we didn't even know we needed. The custom theme perfectly showcases our work.",
      rating: 5,
      avatar: {
        initials: "MC",
        color: "from-green-500 to-blue-600"
      },
      metrics: [
        { label: "Performance", value: "95/100" },
        { label: "Client Feedback", value: "Excellent" }
      ]
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marketing Manager",
      company: "Local Business Co.",
      content: "Professional, reliable, and delivered exactly what was promised. Our website traffic increased significantly after the redesign. The team was responsive throughout the project and provided excellent post-launch support. Best investment we've made for our digital presence.",
      rating: 5,
      avatar: {
        initials: "ED",
        color: "from-purple-500 to-pink-600"
      },
      metrics: [
        { label: "Traffic", value: "+150%" },
        { label: "Engagement", value: "+85%" }
      ]
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Founder",
      company: "E-comm Solutions",
      content: "The migration from our old platform to WordPress was seamless. Zero downtime and all our data transferred perfectly. The new WooCommerce setup handles our inventory much better and the checkout process is so much smoother. Revenue has increased by 40% since launch.",
      rating: 5,
      avatar: {
        initials: "DR",
        color: "from-orange-500 to-red-600"
      },
      metrics: [
        { label: "Revenue", value: "+40%" },
        { label: "Downtime", value: "0 hours" }
      ]
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Operations Director",
      company: "Healthcare Plus",
      content: "Their ongoing maintenance service has been exceptional. Our site has never been down, security is rock-solid, and performance stays consistently high. The team proactively identifies and resolves issues before they become problems. True peace of mind.",
      rating: 5,
      avatar: {
        initials: "LT",
        color: "from-teal-500 to-green-600"
      },
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Security Score", value: "A+" }
      ]
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            What Our <span className="text-gradient-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform their WordPress presence
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <Card className="p-12 bg-card border border-border shadow-xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 text-accent fill-accent animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-foreground text-center leading-relaxed mb-8 animate-fade-in">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center mb-8">
                {/* Avatar */}
                <div className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentTestimonial].avatar.color} rounded-full flex items-center justify-center mr-6 shadow-lg`}>
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].avatar.initials}
                  </span>
                </div>

                {/* Author Details */}
                <div className="text-center">
                  <div className="font-space-grotesk font-bold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex justify-center gap-8">
                {testimonials[currentTestimonial].metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-space-grotesk font-bold text-primary">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card border border-border hover:bg-primary hover:text-primary-foreground shadow-lg"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card border border-border hover:bg-primary hover:text-primary-foreground shadow-lg"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary scale-125' 
                  : 'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mt-6">
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300"
              style={{ width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-center text-muted-foreground mb-8">Trusted by growing businesses</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                onClick={() => goToTestimonial(index)}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatar.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <span className="text-white font-bold text-sm">
                    {testimonial.avatar.initials}
                  </span>
                </div>
                <div className="text-xs font-medium text-foreground">
                  {testimonial.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;



