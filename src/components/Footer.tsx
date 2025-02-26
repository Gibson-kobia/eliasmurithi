import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Email: eliasmurithi26@gmail.com<br />
              Phone: +254790400278
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-gold-300">About</Link></li>
              <li><Link to="/vision" className="text-gray-300 hover:text-gold-300">Vision</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-gold-300">News</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4 sm:space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-gold-300 w-full sm:w-auto">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold-300">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold-300">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-800 text-center text-gray-300">
          <p>© 2027 Elias Murithi Mithika Campaign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}