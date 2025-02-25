/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true, // For Netlify deployment
  },
};

module.exports = nextConfig; 