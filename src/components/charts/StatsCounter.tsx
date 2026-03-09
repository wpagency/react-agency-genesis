import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
}

interface StatsCounterProps {
  stats: StatItem[];
  duration?: number;
  className?: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ 
  stats, 
  duration = 2000,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const increment = stat.value / (duration / 50);
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(intervals[index]);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible, stats, duration]);

  return (
    <div ref={ref} className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">
                {stat.prefix}
                <span className="tabular-nums">
                  {counters[index].toLocaleString()}
                </span>
                {stat.suffix}
              </div>
              <div className="text-sm font-medium text-foreground">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};


