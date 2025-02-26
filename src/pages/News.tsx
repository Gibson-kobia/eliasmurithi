import React from 'react';
import { motion } from 'framer-motion';
import { NewsItem } from '../types';
import { ArrowRight } from 'lucide-react';

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Community Development Initiative',
    excerpt: 'A new initiative to support local businesses and promote economic growth in Kianjai Ward.',
    date: '2027-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 2,
    title: 'Education Support Program',
    excerpt: 'New scholarship program to support talented students from underprivileged backgrounds in Kianjai Ward.',
    date: '2027-03-10',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 3,
    title: 'Infrastructure Development Plans',
    excerpt: 'Comprehensive infrastructure development plan presented for Kianjai Ward, focusing on road networks and water supply.',
    date: '2024-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function News() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 
          className="text-4xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest News & Updates
        </motion.h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 hover:text-primary-600 transition-colors">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <p className="text-primary-600 font-medium flex items-center gap-2 group">
                  Coming Soon
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2" />
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}