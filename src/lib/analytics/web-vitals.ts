import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';

export const trackWebVitals = () => {
  onCLS(metric => {
    console.log('CLS:', metric);
    // You can send this data to your analytics platform
  });
  onINP(metric => {
    console.log('INP:', metric);
  });
  onLCP(metric => {
    console.log('LCP:', metric);
  });
  onFCP(metric => {
    console.log('FCP:', metric);
  });
  onTTFB(metric => {
    console.log('TTFB:', metric);
  });
};



