import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export default function About() {
  const qualities = [
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Integrity",
      description: "Committed to transparent and ethical leadership in service to our community."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Community Focus",
      description: "Dedicated to inclusive development that benefits all residents of Kianjai Ward."
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Vision Driven",
      description: "Strategic approach to sustainable development and community growth."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Experience",
      description: "Proven track record in community development and public service."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Elias Murithi Mithika
          </motion.h1>
          <motion.p 
            className="text-xl text-orange-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A visionary leader committed to transforming Kianjai Ward through sustainable development and community empowerment.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Leader for the People</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Born and raised in Kianjai, Elias Murithi Mithika embodies the spirit and aspirations of our community. 
                His deep connection to the region and its people drives his commitment to creating positive change.
              </p>
              <p>
                With extensive experience in community development and a passion for public service, 
                Elias understands the challenges and opportunities that our ward faces. His approach 
                combines practical solutions with innovative thinking to address the needs of all residents.
              </p>
              <p>
                His vision for Kianjai Ward focuses on sustainable development, economic empowerment, 
                and improved public services that will benefit current and future generations.
              </p>
            </div>
          </motion.div>
          
          <div className="flex justify-center items-start">
            <ImageWithFallback
              src="/images/elias.jpg"
              fallbackSrc="/images/placeholder.jpg"
              alt="Elias Murithi Mithika"
              className="rounded-lg shadow-xl w-full max-w-md h-[500px] object-cover object-top transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Leadership Qualities Section */}
        <div className="mt-24">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Leadership Qualities
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{quality.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{quality.title}</h3>
                <p className="text-gray-600">{quality.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}