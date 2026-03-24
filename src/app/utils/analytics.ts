// Analytics utility for tracking user interactions
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

class Analytics {
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = process.env.NODE_ENV === 'production';
  }

  // Track page views
  trackPageView(path: string, title?: string) {
    if (!this.isEnabled) return;

    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
        page_title: title,
      });
    }

    // Custom analytics
    this.sendEvent({
      action: 'page_view',
      category: 'navigation',
      label: path,
    });
  }

  // Track custom events
  trackEvent({ action, category, label, value }: AnalyticsEvent) {
    if (!this.isEnabled) return;

    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    // Custom analytics
    this.sendEvent({ action, category, label, value });
  }

  // Track user interactions
  trackClick(element: string, location: string) {
    this.trackEvent({
      action: 'click',
      category: 'user_interaction',
      label: `${element}_${location}`,
    });
  }

  // Track form submissions
  trackFormSubmit(formName: string, success: boolean) {
    this.trackEvent({
      action: 'form_submit',
      category: 'engagement',
      label: formName,
      value: success ? 1 : 0,
    });
  }

  // Track scroll depth
  trackScrollDepth(percentage: number) {
    this.trackEvent({
      action: 'scroll_depth',
      category: 'engagement',
      label: `${percentage}%`,
      value: percentage,
    });
  }

  // Track performance metrics
  trackPerformance(metric: string, value: number) {
    this.trackEvent({
      action: 'performance',
      category: 'technical',
      label: metric,
      value: Math.round(value),
    });
  }

  // Send event to analytics service
  private sendEvent(event: AnalyticsEvent) {
    // Here you would send to your analytics service
    // For example: Mixpanel, Amplitude, custom endpoint
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }

    // Example: Send to custom endpoint
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(event),
    // });
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Convenience functions
export const trackPageView = (path: string, title?: string) => 
  analytics.trackPageView(path, title);

export const trackClick = (element: string, location: string) => 
  analytics.trackClick(element, location);

export const trackFormSubmit = (formName: string, success: boolean) => 
  analytics.trackFormSubmit(formName, success);