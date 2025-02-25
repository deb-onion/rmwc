import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'Planning Your Perfect Mountain Wedding',
    excerpt: 'Essential tips for creating a magical celebration in the Canadian Rockies.',
    image: '/images/venues/fairmont-banff.jpg',
    category: 'Planning Tips',
    date: 'March 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Best Wedding Venues in Banff',
    excerpt: 'Discover the most stunning wedding venues in Banff National Park.',
    image: '/images/venues/lake-louise.jpg',
    category: 'Venues',
    date: 'March 10, 2024',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Mountain Wedding Photography Guide',
    excerpt: 'Tips for capturing breathtaking photos in the Canadian Rockies.',
    image: '/images/venues/emerald-lake.jpg',
    category: 'Photography',
    date: 'March 5, 2024',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Seasonal Wedding Guide',
    excerpt: 'Choosing the perfect season for your mountain wedding.',
    image: '/images/venues/silvertip.jpg',
    category: 'Planning Tips',
    date: 'March 1, 2024',
    readTime: '8 min read'
  }
];

const categories = [
  'All',
  'Planning Tips',
  'Venues',
  'Photography',
  'Decor',
  'Real Weddings'
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-4">Wedding Blog</h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            Inspiration and advice for your mountain wedding
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full ${
                  category === 'All'
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <motion.a
                    href={`/blog/${post.id}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block text-primary-500 font-medium hover:text-primary-600"
                  >
                    Read More →
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest wedding planning tips and inspiration delivered to your inbox
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 