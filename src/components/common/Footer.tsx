'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Planning Guide', href: '/planning-resources' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Venues', href: '/venues' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  },
  {
    title: 'Connect',
    links: [
      { name: 'Instagram', href: 'https://instagram.com' },
      { name: 'Pinterest', href: 'https://pinterest.com' },
      { name: 'Facebook', href: 'https://facebook.com' },
      { name: 'Twitter', href: 'https://twitter.com' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary-500">
              RMWC
            </Link>
            <p className="text-gray-600">
              Creating unforgettable mountain weddings in the Canadian Rockies
            </p>
            <div className="space-x-4">
              {footerSections[2].links.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="inline-block text-gray-400 hover:text-primary-500"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.slice(0, 2).map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-600 not-italic space-y-2">
              <p>123 Mountain View Drive</p>
              <p>Banff, Alberta T1L 1K2</p>
              <p>Canada</p>
              <p className="mt-4">
                <a
                  href="tel:+14035550123"
                  className="hover:text-primary-500 transition-colors"
                >
                  (403) 555-0123
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@rockymountainweddings.ca"
                  className="hover:text-primary-500 transition-colors"
                >
                  hello@rockymountainweddings.ca
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-gray-500">
          <p>© {new Date().getFullYear()} Rocky Mountain Wedding Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 