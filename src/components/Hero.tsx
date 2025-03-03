import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePerformance } from '../contexts/PerformanceContext';

export default function Hero() {
  const { shouldUseSimpleAnimations } = usePerformance();

  // Define simpler animations for low-end devices
  const gradientAnimation = shouldUseSimpleAnimations
    ? { initial: { opacity: 0.9 }, animate: { opacity: 1 }, transition: { duration: 0.5 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.5 } };

  const contentAnimation = shouldUseSimpleAnimations
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } }
    : { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 } };

  const titleAnimation = shouldUseSimpleAnimations
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.3 } };

  const descriptionAnimation = shouldUseSimpleAnimations
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.6 } };

  const buttonAnimation = shouldUseSimpleAnimations
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.9 } };

  const imageAnimation = shouldUseSimpleAnimations
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } }
    : { 
        initial: { opacity: 0, scale: 0.8 }, 
        animate: { opacity: 1, scale: 1 }, 
        transition: { duration: 0.8, delay: 0.3 },
        whileHover: { scale: 1.05 }
      };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80"
          {...gradientAnimation}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...contentAnimation}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Leadership That Serves
              <motion.span
                className="block text-gold-300"
                {...titleAnimation}
              >
                Kianjai Ward
              </motion.span>
            </h1>
            <motion.p
              className="text-xl text-gray-200 mb-8"
              {...descriptionAnimation}
            >
              Join Elias Murithi Mithika in building a brighter future for our community. 
              Together, we can create positive change and sustainable development.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              {...buttonAnimation}
            >
              <Link
                to="/vision"
                className="group relative overflow-hidden border-2 border-white text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                <span className="absolute inset-0 bg-white/10 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hidden md:block"
            {...imageAnimation}
          >
            <img
              src="/images/elias-portrait.jpg"
              alt="Elias Murithi Mithika"
              className="rounded-lg shadow-2xl w-full h-auto max-w-md mx-auto transition-all duration-500"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}