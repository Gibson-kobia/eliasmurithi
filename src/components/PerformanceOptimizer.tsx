import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePerformance } from '../contexts/PerformanceContext';

/**
 * This component optimizes performance by cleaning up resources
 * when navigating between pages and implementing other performance
 * optimizations for low-end devices.
 */
export default function PerformanceOptimizer() {
  const location = useLocation();
  const { isLowEndDevice } = usePerformance();

  // Clean up resources when navigating between pages
  useEffect(() => {
    // Force garbage collection on page change (if possible)
    if (isLowEndDevice && 'gc' in window) {
      try {
        // @ts-ignore - gc is not in the TypeScript window type
        window.gc();
      } catch (e) {
        console.log('GC not available');
      }
    }

    // Clear image cache for unused images
    if (isLowEndDevice) {
      // Find all images that are no longer visible
      const allImages = document.querySelectorAll('img');
      allImages.forEach(img => {
        // Check if the image is in the viewport
        const rect = img.getBoundingClientRect();
        const isVisible = (
          rect.top >= -1000 &&
          rect.left >= -1000 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 1000 &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth) + 1000
        );

        // If the image is not visible and has a src, remove it from memory
        if (!isVisible && img.src && !img.dataset.keepAlive) {
          const originalSrc = img.src;
          img.src = '';
          // Store the original src for later restoration if needed
          img.dataset.originalSrc = originalSrc;
        }
      });
    }

    // Reduce animation frame rate for low-end devices
    if (isLowEndDevice) {
      document.documentElement.style.setProperty('--animation-duration-factor', '1.5');
    } else {
      document.documentElement.style.setProperty('--animation-duration-factor', '1');
    }

    // Clean up any other resources that might be using memory
    return () => {
      // Additional cleanup if needed
    };
  }, [location.pathname, isLowEndDevice]);

  // This component doesn't render anything
  return null;
}