import React, { useEffect } from 'react';
import { useAnalytics } from './AnalyticsProvider';
import { useLocation } from 'react-router-dom';

interface ConversionTrackingProps {
  children: React.ReactNode;
}

export const ConversionTracking: React.FC<ConversionTrackingProps> = ({ children }) => {
  const { trackPageView, trackEvent } = useAnalytics();
  const location = useLocation();

  useEffect(() => {
    // Track page views on route changes
    trackPageView(location.pathname, {
      search: location.search,
      hash: location.hash
    });
  }, [location, trackPageView]);

  useEffect(() => {
    // Track form submissions
    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const formId = form.id || form.className || 'unknown_form';
      
      trackEvent('form_submission', {
        form_id: formId,
        page: location.pathname
      });
    };

    // Track button clicks
    const handleButtonClick = (event: Event) => {
      const button = event.target as HTMLButtonElement;
      const buttonText = button.textContent?.trim() || button.getAttribute('aria-label') || 'unknown_button';
      
      // Track CTA clicks
      if (button.classList.contains('cta') || buttonText.toLowerCase().includes('get quote') || buttonText.toLowerCase().includes('contact')) {
        trackEvent('cta_click', {
          button_text: buttonText,
          page: location.pathname
        });
      }
    };

    // Track external link clicks
    const handleLinkClick = (event: Event) => {
      const link = event.target as HTMLAnchorElement;
      const href = link.href;
      
      if (href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'))) {
        trackEvent('external_link_click', {
          url: href,
          text: link.textContent?.trim(),
          page: location.pathname
        });
      }
    };

    // Track scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercentage > maxScrollDepth && scrollPercentage % 25 === 0) {
        maxScrollDepth = scrollPercentage;
        trackEvent('scroll_depth', {
          depth: scrollPercentage,
          page: location.pathname
        });
      }
    };

    // Track time on page
    const startTime = Date.now();
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', {
        duration: timeOnPage,
        page: location.pathname
      });
    };

    // Add event listeners
    document.addEventListener('submit', handleFormSubmit);
    document.addEventListener('click', handleButtonClick);
    document.addEventListener('click', handleLinkClick);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('click', handleButtonClick);
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [trackEvent, location.pathname]);

  return <>{children}</>;
};


