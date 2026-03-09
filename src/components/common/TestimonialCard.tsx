import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialResult {
  metric: string;
  improvement: string;
}

interface TestimonialCardProps {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  project: string;
  industry: string;
  results: TestimonialResult[];
  timeline: string;
  featured: boolean;
  className?: string;
}

const generateGeometricAvatar = (name: string) => {
  const colors = [
    'bg-gradient-to-br from-primary to-primary-light',
    'bg-gradient-to-br from-accent to-accent-light',
    'bg-gradient-to-br from-success to-green-600',
    'bg-gradient-to-br from-warning to-orange-600',
    'bg-gradient-to-br from-purple-500 to-purple-700',
    'bg-gradient-to-br from-blue-500 to-blue-700'
  ];
  
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const colorIndex = name.length % colors.length;
  
  return {
    initials,
    colorClass: colors[colorIndex]
  };
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  role,
  content,
  rating,
  project,
  industry,
  results,
  timeline,
  featured,
  className
}) => {
  const avatar = generateGeometricAvatar(name);

  return (
    <Card className={cn(
      "relative transition-all duration-300 hover:shadow-xl",
      featured && "border-primary/20 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5",
      className
    )}>
      <CardContent className="p-6">
        {/* Quote Icon */}
        <Quote className="w-8 h-8 text-primary/20 mb-4" />

        {/* Content */}
        <blockquote className="text-foreground text-sm leading-relaxed mb-6 italic">
          "{content}"
        </blockquote>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating
                  ? "text-warning fill-warning"
                  : "text-muted stroke-muted"
              )}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-2">
            {rating}/5
          </span>
        </div>

        {/* Author Info */}
        <div className="flex items-start space-x-3 mb-4">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm",
            avatar.colorClass
          )}>
            {avatar.initials}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
            <p className="text-sm font-medium text-primary">{company}</p>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-3 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {industry}
            </Badge>
            <span className="text-xs text-muted-foreground">{timeline}</span>
          </div>

          <div>
            <h5 className="text-sm font-medium text-foreground mb-2">{project}</h5>
            {results.length > 0 && (
              <div className="space-y-2">
                {results.slice(0, 2).map((result, index) => (
                  <div key={index} className="flex items-center justify-between bg-muted/30 rounded-lg p-2">
                    <span className="text-xs text-muted-foreground">{result.metric}</span>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-success" />
                      <span className="text-xs font-semibold text-success">
                        {result.improvement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="text-xs">
              Featured
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};


