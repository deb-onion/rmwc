'use client';

import React from 'react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Full Wedding Planning</h2>
            <p className="text-gray-700">
              Comprehensive wedding planning services from start to finish.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Day-of Coordination</h2>
            <p className="text-gray-700">
              Professional coordination on your wedding day.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Venue Selection</h2>
            <p className="text-gray-700">
              Assistance finding the perfect venue for your special day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 