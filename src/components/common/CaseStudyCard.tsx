import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowUpRight, Clock, TrendingUp, Users, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudyResult {
  metric: string;
  before: number;
  after: number;
  improvement: string;
  unit: string;
}

interface CaseStudyMetrics {
  performance: number;
  conversion: number;
  traffic: number;
  satisfaction: number;
}

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  results: CaseStudyResult[];
  technologies: string[];
  timeline: string;
  featured: boolean;
  metrics: CaseStudyMetrics;
  onViewDetails?: (id: string) => void;
  className?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  client,
  industry,
  description,
  results,
  technologies,
  timeline,
  featured,
  metrics,
  onViewDetails,
  className
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getMetricIcon = (metric: string) => {
    switch (metric.toLowerCase()) {
      case 'performance': return <Zap className="w-4 h-4" />;
      case 'conversion': return <TrendingUp className="w-4 h-4" />;
      case 'traffic': return <Users className="w-4 h-4" />;
      default: return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  const getMetricColor = (value: number) => {
    if (value >= 90) return 'text-success';
    if (value >= 70) return 'text-primary';
    if (value >= 50) return 'text-warning';
    return 'text-destructive';
  };

  const topResults = results.slice(0, 2);

  return (
    <Card className={cn(
      "group transition-all duration-300 hover:shadow-xl hover:shadow-primary/5",
      featured && "border-primary/20 shadow-lg",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              {featured && (
                <Badge variant="default" className="text-xs">
                  Featured
                </Badge>
              )}
              <Badge variant="outline" className="text-xs">
                {industry}
              </Badge>
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground font-medium">{client}</p>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-xs">{timeline}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getMetricIcon(key)}
                  <span className="text-xs font-medium capitalize">{key}</span>
                </div>
                <span className={cn("text-xs font-bold", getMetricColor(value))}>
                  {value}%
                </span>
              </div>
              <Progress value={value} className="h-2" />
            </div>
          ))}
        </div>

        {/* Top Results */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">Key Results</h4>
          {topResults.map((result, index) => (
            <div key={index} className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
              <span className="text-sm text-muted-foreground">{result.metric}</span>
              <div className="text-right">
                <div className="text-sm font-bold text-success">
                  +{result.improvement}
                </div>
                <div className="text-xs text-muted-foreground">
                  {result.after}{result.unit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Content */}
        <div className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="space-y-4 pt-4 border-t border-border">
            {/* All Results */}
            {results.length > 2 && (
              <div className="space-y-2">
                <h5 className="text-sm font-medium">All Results</h5>
                <div className="grid grid-cols-1 gap-2">
                  {results.slice(2).map((result, index) => (
                    <div key={index} className="flex items-center justify-between text-sm bg-muted/20 rounded p-2">
                      <span className="text-muted-foreground">{result.metric}</span>
                      <span className="font-medium text-success">+{result.improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-2">
              <h5 className="text-sm font-medium">Technologies Used</h5>
              <div className="flex flex-wrap gap-1">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>
          {onViewDetails && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDetails(id)}
              className="text-xs group-hover:border-primary group-hover:text-primary"
            >
              View Details
              <ArrowUpRight className="w-3 h-3 ml-1" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};


