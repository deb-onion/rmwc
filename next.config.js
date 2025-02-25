/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove standalone output for Netlify compatibility
  // output: 'standalone',
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true, // For Netlify deployment
  },
};

module.exports = nextConfig; 