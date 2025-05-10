import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { usePerformance } from '../contexts/PerformanceContext';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const { shouldUseSimpleAnimations } = usePerformance();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // If we should use simple animations, reduce the animation complexity
  const animationProps = shouldUseSimpleAnimations
    ? {
        // Simpler animation for low-end devices
        initial: { opacity: 0 },
        animate: inView ? { opacity: 1 } : { opacity: 0 },
        transition: { duration: 0.3 }
      }
    : {
        // Full animation for high-end devices
        initial: { opacity: 0, y: 50 },
        animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
        transition: { duration: 0.6, delay }
      };

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className={className}
    >
      {children}
    </motion.div>
  );
}