import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PerformanceContextType {
  isLowEndDevice: boolean;
  prefersReducedMotion: boolean;
  shouldUseSimpleAnimations: boolean;
}

const PerformanceContext = createContext<PerformanceContextType>({
  isLowEndDevice: false,
  prefersReducedMotion: false,
  shouldUseSimpleAnimations: false,
});

export const usePerformance = () => useContext(PerformanceContext);

interface PerformanceProviderProps {
  children: ReactNode;
}

export const PerformanceProvider: React.FC<PerformanceProviderProps> = ({ children }) => {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for low-end device based on memory
    if ('deviceMemory' in navigator) {
      // @ts-ignore - deviceMemory is not in the TypeScript navigator type yet
      setIsLowEndDevice(navigator.deviceMemory < 4);
    }

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  // Determine if we should use simple animations
  const shouldUseSimpleAnimations = isLowEndDevice || prefersReducedMotion;

  return (
    <PerformanceContext.Provider
      value={{
        isLowEndDevice,
        prefersReducedMotion,
        shouldUseSimpleAnimations,
      }}
    >
      {children}
    </PerformanceContext.Provider>
  );
};