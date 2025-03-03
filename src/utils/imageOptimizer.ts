/**
 * Utility functions for optimizing images based on device capabilities
 */

// Function to get the appropriate image size based on device capabilities
export const getOptimizedImageUrl = (
  originalUrl: string,
  options: {
    width?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
  } = {}
): string => {
  // If the URL is external (starts with http), return it as is
  if (originalUrl.startsWith('http')) {
    return originalUrl;
  }

  // Default options
  const { 
    width = 800, 
    quality = 80,
    format = 'webp'
  } = options;

  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return originalUrl;
  }

  // For low-end devices, reduce quality and size further
  const isLowEndDevice = 'deviceMemory' in navigator && 
    // @ts-ignore - deviceMemory is not in the TypeScript navigator type yet
    navigator.deviceMemory < 4;

  const actualWidth = isLowEndDevice ? Math.min(width, 600) : width;
  const actualQuality = isLowEndDevice ? Math.min(quality, 60) : quality;

  // For local development, just return the original URL
  // In a real app, you would use an image optimization service or CDN
  return originalUrl;
};

// Function to create a low-quality placeholder image URL
export const getLowQualityPlaceholder = (originalUrl: string): string => {
  // In a real app, you would generate a tiny version of the image
  // For this example, we'll just return the original URL
  return originalUrl;
};

// Function to preload critical images
export const preloadCriticalImages = (imageUrls: string[]): void => {
  if (typeof window === 'undefined') {
    return;
  }

  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};