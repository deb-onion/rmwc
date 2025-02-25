import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Sarah Anderson',
    role: 'Lead Wedding Planner',
    image: '/images/quiz/landscape-peaks.jpg',
    description: 'With over 10 years of experience planning mountain weddings'
  },
  {
    name: 'Michael Thompson',
    role: 'Design Director',
    image: '/images/quiz/landscape-lake.jpg',
    description: 'Expert in creating stunning mountain-inspired wedding designs'
  },
  {
    name: 'Emily Chen',
    role: 'Venue Coordinator',
    image: '/images/quiz/landscape-meadow.jpg',
    description: 'Specializes in finding the perfect mountain venue for each couple'
  },
  {
    name: 'David Miller',
    role: 'Logistics Manager',
    image: '/images/quiz/landscape-lodge.jpg',
    description: 'Ensures every wedding runs smoothly in any mountain condition'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <img
          src="/images/venues/fairmont-banff.jpg"
          alt="Mountain wedding scene"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Creating Unforgettable Mountain Weddings</p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2015, Rocky Mountain Wedding Co. has been turning wedding dreams into reality
            in the heart of the Canadian Rockies. We specialize in creating extraordinary
            mountain weddings that capture the majesty of our stunning natural surroundings.
          </p>
          <p className="text-gray-600">
            Our team of experienced planners combines local expertise with creative vision
            to design weddings that are as unique as the couples we serve. From intimate
            elopements to grand celebrations, we handle every detail with precision and care.
          </p>
        </motion.div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 