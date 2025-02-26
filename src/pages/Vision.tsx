import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Vision() {
  const policies = [
    {
      title: 'Economic Empowerment',
      description: 'Creating sustainable economic opportunities through market development, support for small businesses, and agricultural modernization.',
      points: [
        'Establish modern market facilities',
        'Provide support for small businesses',
        'Implement agricultural modernization programs',
        'Create youth employment initiatives'
      ]
    },
    {
      title: 'Education & Skills Development',
      description: 'Investing in quality education and vocational training to prepare our youth for the future.',
      points: [
        'Improve school infrastructure',
        'Establish vocational training centers',
        'Provide educational scholarships',
        'Support digital literacy programs'
      ]
    },
    {
      title: 'Infrastructure Development',
      description: 'Building modern infrastructure to improve connectivity and enhance service delivery.',
      points: [
        'Road network improvement',
        'Water supply expansion',
        'Street lighting installation',
        'Public spaces development'
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Vision for Kianjai</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Together, we will transform Kianjai Ward into a model of sustainable development,
            where every resident has the opportunity to thrive and prosper.
          </p>
        </div>
      </div>

      {/* Policy Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{policy.title}</h3>
              <p className="text-gray-600 mb-6">{policy.description}</p>
              <ul className="space-y-2">
                {policy.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <ArrowRight className="text-orange-600 mt-1 mr-2" size={16} />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}