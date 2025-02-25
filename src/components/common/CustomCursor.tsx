'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/lib/hooks/useMousePosition';

interface CustomCursorProps {
  variant?: 'default' | 'hover' | 'click';
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ variant = 'default' }) => {
  const { x, y } = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorVariants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'transparent',
      border: '1px solid rgba(134, 121, 144, 0.4)',
      x: x - 16,
      y: y - 16,
    },
    hover: {
      height: 48,
      width: 48,
      backgroundColor: 'rgba(134, 121, 144, 0.1)',
      border: '1px solid rgba(134, 121, 144, 0.6)',
      x: x - 24,
      y: y - 24,
    },
    click: {
      height: 24,
      width: 24,
      backgroundColor: 'rgba(134, 121, 144, 0.2)',
      border: '1px solid rgba(134, 121, 144, 0.8)',
      x: x - 12,
      y: y - 12,
    },
  };

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-50 rounded-full mix-blend-difference"
      animate={variant}
      variants={cursorVariants}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
}; 