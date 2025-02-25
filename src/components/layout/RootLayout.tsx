'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomCursor } from '../common/CustomCursor';
import { usePathname } from 'next/navigation';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'click'>('default');
  const pathname = usePathname();

  const handleMouseDown = () => setCursorVariant('click');
  const handleMouseUp = () => setCursorVariant('default');
  const handleMouseEnter = () => setCursorVariant('hover');
  const handleMouseLeave = () => setCursorVariant('default');

  return (
    <div
      className="min-h-screen bg-neutral-white"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <CustomCursor variant={cursorVariant} />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className="w-full"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}; 