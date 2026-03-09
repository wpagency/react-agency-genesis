import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string, properties?: Record<string, any>) => void;
  trackConversion: (type: string, value?: number, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

interface AnalyticsProviderProps {
  children: ReactNode;
  gaId?: string;
  gtmId?: string;
  enabled?: boolean;
}

// Google Analytics 4 implementation
const initializeGA4 = (gaId: string) => {
  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', gaId, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: false, // We'll handle page views manually
  });
};

// Google Tag Manager implementation
const initializeGTM = (gtmId: string) => {
  // GTM script
  const script = document.createElement('script');
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
  document.head.appendChild(script);

  // GTM noscript
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.appendChild(noscript);
};

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  gaId = 'G-XXXXXXXXXX', // Replace with actual GA4 ID
  gtmId = 'GTM-XXXXXXX', // Replace with actual GTM ID
  enabled = true
}) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Initialize analytics services
    if (gaId) {
      initializeGA4(gaId);
    }
    
    if (gtmId) {
      initializeGTM(gtmId);
    }

    // Track performance metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const nav = entry as PerformanceNavigationTiming;
            trackEvent('performance_timing', {
              dns_time: nav.domainLookupEnd - nav.domainLookupStart,
              connect_time: nav.connectEnd - nav.connectStart,
              response_time: nav.responseEnd - nav.responseStart,
              dom_content_loaded: nav.domContentLoadedEventEnd - nav.fetchStart,
              load_complete: nav.loadEventEnd - nav.fetchStart
            });
          }
        });
      });
      
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, [gaId, gtmId, enabled]);

  const trackEvent = (event: string, properties: Record<string, any> = {}) => {
    if (!enabled || typeof window === 'undefined') return;

    try {
      // GA4 event tracking
      if (window.gtag) {
        window.gtag('event', event, {
          ...properties,
          timestamp: Date.now()
        });
      }

      // Custom analytics endpoint
      fetch('/api/analytics/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event,
          properties: {
            ...properties,
            timestamp: Date.now(),
            page: window.location.pathname,
            referrer: document.referrer,
            user_agent: navigator.userAgent
          }
        }),
        keepalive: true
      }).catch(() => {
        // Silently fail for analytics
      });
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  };

  const trackPageView = (page: string, properties: Record<string, any> = {}) => {
    if (!enabled) return;

    try {
      // GA4 page view
      if (window.gtag) {
        window.gtag('config', gaId, {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: properties
        });
      }

      // Custom page view tracking
      trackEvent('page_view', {
        page,
        title: document.title,
        ...properties
      });
    } catch (error) {
      console.warn('Page view tracking failed:', error);
    }
  };

  const trackConversion = (type: string, value?: number, properties: Record<string, any> = {}) => {
    if (!enabled) return;

    try {
      // GA4 conversion tracking
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: gaId,
          value: value,
          currency: 'USD',
          transaction_id: Date.now().toString(),
          ...properties
        });
      }

      // Enhanced conversion tracking
      trackEvent('conversion', {
        type,
        value,
        currency: 'USD',
        ...properties
      });
    } catch (error) {
      console.warn('Conversion tracking failed:', error);
    }
  };

  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}


