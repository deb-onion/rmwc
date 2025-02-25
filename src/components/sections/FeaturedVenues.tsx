import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveGrid } from '../common/InteractiveGrid';

const venues = [
  {
    id: 'fairmont-banff',
    title: 'Fairmont Banff Springs',
    description: 'A castle in the Rockies offering timeless elegance and luxury.',
    image: '/images/venues/fairmont-banff.jpg',
    link: '/venues/banff/fairmont-banff-springs',
  },
  {
    id: 'lake-louise',
    title: 'Fairmont Chateau Lake Louise',
    description: 'Iconic lakeside venue with breathtaking mountain views.',
    image: '/images/venues/lake-louise.jpg',
    link: '/venues/lake-louise/chateau',
  },
  {
    id: 'emerald-lake',
    title: 'Emerald Lake Lodge',
    description: 'Serene wilderness setting perfect for intimate celebrations.',
    image: '/images/venues/emerald-lake.jpg',
    link: '/venues/emerald-lake/lodge',
  },
  {
    id: 'kananaskis',
    title: 'Kananaskis Mountain Lodge',
    description: 'Modern luxury nestled in pristine mountain wilderness.',
    image: '/images/venues/kananaskis.jpg',
    link: '/venues/kananaskis/mountain-lodge',
  },
  {
    id: 'silvertip',
    title: 'Silvertip Resort',
    description: 'Elevated mountain venue with panoramic valley views.',
    image: '/images/venues/silvertip.jpg',
    link: '/venues/canmore/silvertip',
  },
  {
    id: 'buffalo-mountain',
    title: 'Buffalo Mountain Lodge',
    description: 'Rustic elegance with authentic Rocky Mountain charm.',
    image: '/images/venues/buffalo-mountain.jpg',
    link: '/venues/banff/buffalo-mountain',
  }
];

export const FeaturedVenues: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair mb-6">Featured Wedding Venues</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most stunning wedding venues in the Canadian Rockies, each offering a unique blend of natural beauty and luxurious amenities.
          </p>
        </motion.div>

        <InteractiveGrid
          items={venues}
          columns={3}
          gap={6}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/venues"
            className="inline-block px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
          >
            Explore All Venues
          </a>
        </motion.div>
      </div>
    </section>
  );
}; 