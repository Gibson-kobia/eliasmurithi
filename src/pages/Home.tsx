import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const initiatives = [
    {
      title: 'Economic Growth',
      description: 'Creating opportunities for businesses and employment through strategic development initiatives.',
      icon: <CheckCircle2 className="w-6 h-6 text-orange-600" />
    },
    {
      title: 'Education',
      description: 'Investing in quality education and training programs for our youth.',
      icon: <CheckCircle2 className="w-6 h-6 text-orange-600" />
    },
    {
      title: 'Infrastructure',
      description: 'Developing modern infrastructure to improve connectivity and service delivery.',
      icon: <CheckCircle2 className="w-6 h-6 text-orange-600" />
    }
  ];

  return (
    <>
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-orange-900/95 to-orange-800/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <span className="bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-semibold">
                  Campaign 2027
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Leadership That Serves
                <motion.span
                  className="block text-orange-400 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Kianjai Ward
                </motion.span>
              </h1>
              <motion.p
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Elias Murithi Mithika is building a brighter future for our community. 
                Together, we can create positive change and sustainable development.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Link
                  to="/vision"
                  className="group relative overflow-hidden bg-orange-600 text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-orange-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="hidden md:block relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/images/elias2.jpg"
                  alt="Elias Murithi Mithika"
                  className="w-full h-full object-cover object-top transform transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Vision for Kianjai
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Together, we will build a prosperous, inclusive, and sustainable Kianjai Ward 
              that works for everyone.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-orange-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}