import React from 'react';
import { motion } from 'framer-motion';

const venues = [
  {
    id: 'fairmont-banff',
    name: 'Fairmont Banff Springs',
    description: 'A castle in the Rockies offering timeless elegance',
    image: '/images/venues/fairmont-banff.jpg',
    capacity: '20-250',
    location: 'Banff, Alberta'
  },
  {
    id: 'lake-louise',
    name: 'Chateau Lake Louise',
    description: 'Iconic lakeside venue with breathtaking mountain views',
    image: '/images/venues/lake-louise.jpg',
    capacity: '20-350',
    location: 'Lake Louise, Alberta'
  },
  {
    id: 'emerald-lake',
    name: 'Emerald Lake Lodge',
    description: 'Serene mountain lodge surrounded by pristine wilderness',
    image: '/images/venues/emerald-lake.jpg',
    capacity: '20-150',
    location: 'Field, British Columbia'
  },
  {
    id: 'silvertip',
    name: 'Silvertip Resort',
    description: 'Modern mountain resort with panoramic views',
    image: '/images/venues/silvertip.jpg',
    capacity: '20-200',
    location: 'Canmore, Alberta'
  }
];

export default function VenuesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Venues</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Discover our handpicked collection of stunning mountain wedding venues
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venues.map((venue) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{venue.name}</h2>
                <p className="text-gray-600 mb-4">{venue.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Capacity: {venue.capacity} guests</span>
                  <span>{venue.location}</span>
                </div>
                <motion.a
                  href={`/venues/${venue.id}`}
                  className="mt-4 inline-block bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 