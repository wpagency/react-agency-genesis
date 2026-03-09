import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  milestone: string;
  type: 'founding' | 'growth' | 'achievement' | 'expansion';
}

interface TimelineChartProps {
  data: TimelineItem[];
  title?: string;
}

const typeColors = {
  founding: 'bg-primary',
  growth: 'bg-success',
  achievement: 'bg-accent',
  expansion: 'bg-warning'
};

const typeBadgeVariants = {
  founding: 'default',
  growth: 'secondary',
  achievement: 'outline',
  expansion: 'destructive'
} as const;

export const TimelineChart: React.FC<TimelineChartProps> = ({ 
  data, 
  title = "Company Timeline" 
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-center mb-8">{title}</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
        
        <div className="space-y-8">
          {data.map((item, index) => (
            <div 
              key={item.year}
              className={cn(
                "relative pl-12 cursor-pointer transition-all duration-300",
                activeItem === item.year ? "scale-105" : "hover:scale-102"
              )}
              onClick={() => setActiveItem(activeItem === item.year ? null : item.year)}
            >
              {/* Timeline dot */}
              <div className={cn(
                "absolute left-2 w-4 h-4 rounded-full border-4 border-background transition-all duration-300",
                typeColors[item.type],
                activeItem === item.year ? "scale-125 shadow-lg" : ""
              )}></div>
              
              <Card className={cn(
                "transition-all duration-300",
                activeItem === item.year ? "shadow-xl border-primary/50" : "hover:shadow-lg"
              )}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-lg font-semibold text-primary">{item.year}</h4>
                      <Badge variant={typeBadgeVariants[item.type]} className="capitalize">
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    activeItem === item.year ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="pt-3 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-primary">Key Milestone:</span>
                        <span className="text-sm text-foreground">{item.milestone}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


