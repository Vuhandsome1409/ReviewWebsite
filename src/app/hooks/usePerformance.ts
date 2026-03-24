import { useEffect } from "react";

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

export function usePerformance() {
  useEffect(() => {
    // Disable in development to avoid React conflicts
    if (import.meta.env.DEV) {
      console.log("Performance monitoring disabled in development");
      return;
    }

    // Only run in production and in browser
    if (typeof window === "undefined") return;

    // Simple performance logging without complex observers
    const logPerformance = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log('Performance Metrics:', {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            ttfb: navigation.responseStart - navigation.requestStart
          });
        }
      } catch (error) {
        console.warn('Performance logging failed:', error);
      }
    };

    // Log performance after page load
    if (document.readyState === 'complete') {
      setTimeout(logPerformance, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(logPerformance, 1000);
      });
    }
  }, []);
}

// Hook to measure component render time
export function useRenderTime(componentName: string) {
  useEffect(() => {
    if (typeof window === "undefined" || !import.meta.env.DEV) return;
    
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
    };
  });
}