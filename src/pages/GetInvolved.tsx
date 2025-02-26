import React from 'react';
import { Users, Heart, MessageSquare, Share2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GetInvolved() {
  const ways = [
    {
      icon: <Users className="w-12 h-12 text-orange-600" />,
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers and help make a difference in your community.',
      action: 'Join Now'
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-600" />,
      title: 'Support',
      description: 'Support our campaign through various means and help us reach more people.',
      action: 'Support Us'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-orange-600" />,
      title: 'Spread the Word',
      description: 'Share our message with your friends, family, and community members.',
      action: 'Share'
    },
    {
      icon: <Share2 className="w-12 h-12 text-orange-600" />,
      title: 'Connect',
      description: 'Follow us on social media and stay updated with our campaign activities.',
      action: 'Connect'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Join our movement and be part of the positive change in Kianjai Ward.
            Together, we can build a better future for our community.
          </p>
        </div>
      </div>

      {/* Ways to Get Involved */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {way.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{way.title}</h3>
              <p className="text-gray-600 mb-6">{way.description}</p>
              <Link
                to="/register"
                className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
              >
                {way.action}
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Volunteer Form */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Volunteer With Us</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                  Areas of Interest
                </label>
                <select
                  id="interests"
                  name="interests"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select an area</option>
                  <option value="canvassing">Door-to-Door Canvassing</option>
                  <option value="events">Event Organization</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="community-outreach">Community Outreach</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}