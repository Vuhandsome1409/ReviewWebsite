// Preload critical images
export const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    // Add error handling
    link.onerror = () => {
      console.warn(`Failed to preload image: ${url}`);
    };
    document.head.appendChild(link);
  });
};

// Preload critical fonts
export const preloadFonts = (fontUrls: string[]) => {
  fontUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = url;
    link.onerror = () => {
      console.warn(`Failed to preload font: ${url}`);
    };
    document.head.appendChild(link);
  });
};

// Critical resources to preload - only existing files
export const CRITICAL_IMAGES = [
  '/pic_company/fes.jpg', // Hero image
  '/pic_company/tony_trieu.jpg',
  '/pic_company/NHK.jpg',
];

export const CRITICAL_FONTS = [
  // Only add if you have local font files
];

// Initialize preloading
export const initPreloader = () => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  // Preload critical images
  preloadImages(CRITICAL_IMAGES);
  
  // Preload critical fonts
  if (CRITICAL_FONTS.length > 0) {
    preloadFonts(CRITICAL_FONTS);
  }
  
  // Prefetch next likely pages - only in production
  if (window.location.hostname !== 'localhost') {
    const prefetchPages = ['/solutions', '/projects', '/lab', '/about'];
    prefetchPages.forEach((page) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  }
};