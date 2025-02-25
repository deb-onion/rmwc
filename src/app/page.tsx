'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { FeaturedVenues } from '@/components/sections/FeaturedVenues';
import { WeddingStyleQuiz } from '@/components/features/quiz/WeddingStyleQuiz';
import { VisionBoard } from '@/components/features/vision-board/VisionBoard';
import { RootLayout } from '@/components/layout/RootLayout';
import { useScrollAnimation } from '@/lib/animations/useScrollAnimation';
import { motion } from 'framer-motion';

export default function Home() {
  const { ref: servicesRef, springProps: servicesSpring } = useScrollAnimation({ threshold: 0.1 });
  const { ref: venuesRef, springProps: venuesSpring } = useScrollAnimation({ threshold: 0.1 });
  const { ref: quizRef, springProps: quizSpring } = useScrollAnimation({ threshold: 0.1 });
  const { ref: visionRef, springProps: visionSpring } = useScrollAnimation({ threshold: 0.1 });

  return (
    <RootLayout>
      <main className="min-h-screen">
        <HeroSection />
        
        <motion.section
          ref={servicesRef}
          style={servicesSpring}
          className="py-20"
          id="services"
        >
          <ServicesOverview />
        </motion.section>

        <motion.section
          ref={venuesRef}
          style={venuesSpring}
          className="py-20 bg-neutral-50"
          id="venues"
        >
          <FeaturedVenues />
        </motion.section>
        
        <motion.section
          ref={quizRef}
          style={quizSpring}
          className="py-20"
          id="quiz"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-playfair text-center mb-12">
              Discover Your Wedding Style
            </h2>
            <WeddingStyleQuiz />
          </div>
        </motion.section>

        <motion.section
          ref={visionRef}
          style={visionSpring}
          className="py-20 bg-neutral-50"
          id="vision-board"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-playfair text-center mb-12">
              Create Your Vision Board
            </h2>
            <VisionBoard />
          </div>
        </motion.section>
      </main>
    </RootLayout>
  );
}
