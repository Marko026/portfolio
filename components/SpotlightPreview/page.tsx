'use client';
import React from 'react';
import Spotlight from '@/components/ui/Spotlight';
import { AnimatePresence, motion } from 'framer-motion';

export function SpotlightPreview() {
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const firstPart = "Hi! I'am Marko,";
  const secondPart = ' a Next.js Developer based in Austria';
  return (
    <div className="mt-10 md:mt-24">
      <Spotlight className="top-10 md:left-60 md:top-48" fill="white" />
      <h1 className="h1-semibold my-12 mb-4 text-white-900">
        <span className="text-white-900">
          <AnimatePresence>
            {firstPart.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                onAnimationComplete={() => {
                  if (index === firstPart.length - 1) {
                    setAnimationComplete(true);
                  }
                }}>
                {letter}
              </motion.span>
            ))}
            {secondPart.split('').map((letter, index) => (
              <motion.span
                key={index + firstPart.length}
                className="text-white-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: (index + firstPart.length) * 0.05,
                }}
                onAnimationComplete={() => {
                  if (index === secondPart.length - 1) {
                    setAnimationComplete(true);
                  }
                }}>
                {letter}
              </motion.span>
            ))}
          </AnimatePresence>
        </span>
      </h1>
      <motion.p
        className="paragraph-regular mx-auto md:mx-0 text-white-800 sm:w-3/4 md:w-full mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}>
        Passionate about developing performant digital experiences
      </motion.p>
    </div>
  );
}
