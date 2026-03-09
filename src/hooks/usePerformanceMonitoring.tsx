import { useState, useEffect, useCallback } from 'react';

export interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  score: number;
  timestamp: number;
}

export interface WebVital {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    score: 0,
    timestamp: Date.now()
  });

  const [vitals, setVitals] = useState<WebVital[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const calculateScore = (lcp: number, fid: number, cls: number): number => {
    let score = 100;
    
    // LCP scoring (40% weight)
    if (lcp > 4000) score -= 40;
    else if (lcp > 2500) score -= 20;
    
    // FID scoring (30% weight)
    if (fid > 300) score -= 30;
    else if (fid > 100) score -= 15;
    
    // CLS scoring (30% weight)
    if (cls > 0.25) score -= 30;
    else if (cls > 0.1) score -= 15;
    
    return Math.max(0, score);
  };

  const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
    switch (name) {
      case 'LCP':
        return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      case 'FID':
        return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
      case 'CLS':
        return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
      case 'FCP':
        return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
      case 'TTFB':
        return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
      default:
        return 'good';
    }
  };

  const measureTTFB = (): number => {
    if ('performance' in window && 'getEntriesByType' in window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return navigation.responseStart - navigation.requestStart;
    }
    return 0;
  };

  const measureFCP = (): Promise<number> => {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            observer.disconnect();
            resolve(fcpEntry.startTime);
          }
        });
        observer.observe({ entryTypes: ['paint'] });
        
        // Fallback timeout
        setTimeout(() => {
          observer.disconnect();
          resolve(0);
        }, 5000);
      } else {
        resolve(0);
      }
    });
  };

  const measureCoreWebVitals = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Import web-vitals dynamically
    import('web-vitals').then(({ onLCP, onINP, onCLS }) => {
      const handleVital = (vital: WebVital) => {
        setVitals(prev => {
          const filtered = prev.filter(v => v.name !== vital.name);
          return [...filtered, vital];
        });

        setMetrics(prev => {
          const newMetrics = { ...prev };
          
          switch (vital.name) {
            case 'LCP':
              newMetrics.lcp = vital.value;
              break;
            case 'FID':
            case 'INP':
              newMetrics.fid = vital.value;
              break;
            case 'CLS':
              newMetrics.cls = vital.value;
              break;
          }
          
          newMetrics.score = calculateScore(newMetrics.lcp, newMetrics.fid, newMetrics.cls);
          newMetrics.timestamp = Date.now();
          
          return newMetrics;
        });
      };

      onLCP(handleVital);
      onINP(handleVital);
      onCLS(handleVital);
    }).catch(() => {
      // Fallback if web-vitals can't be imported
      console.warn('Web Vitals library not available');
    });

    // Measure additional metrics
    const ttfb = measureTTFB();
    measureFCP().then(fcp => {
      setMetrics(prev => ({
        ...prev,
        ttfb,
        fcp,
        timestamp: Date.now()
      }));
      setIsLoading(false);
    });
  }, []);

  const sendMetrics = useCallback(async (metrics: PerformanceMetrics) => {
    try {
      // Send to analytics service
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('/api/analytics/vitals', JSON.stringify(metrics));
      } else {
        fetch('/api/analytics/vitals', {
          method: 'POST',
          body: JSON.stringify(metrics),
          headers: { 'Content-Type': 'application/json' },
          keepalive: true
        });
      }
    } catch (error) {
      console.warn('Failed to send performance metrics:', error);
    }
  }, []);

  useEffect(() => {
    measureCoreWebVitals();

    // Send metrics when page becomes hidden
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendMetrics(metrics);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [measureCoreWebVitals, sendMetrics, metrics]);

  const getMetricDetails = (name: string, value: number) => ({
    name,
    value,
    rating: getRating(name, value),
    formatted: name === 'CLS' ? value.toFixed(3) : `${Math.round(value)}ms`
  });

  return {
    metrics,
    vitals,
    isLoading,
    getMetricDetails,
    refreshMetrics: measureCoreWebVitals
  };
};


