"use client";
import React from "react";
import Spotlight from "@/components/ui/Spotlight";
import { AnimatePresence, motion } from "framer-motion";

export function SpotlightPreview() {
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const sentence1 = "Hi! I'am Marko";
  const sentence2 = ",a Next.js Developer base in Austria";
  return (
    <div className="mt-10 md:mt-24">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h1 className="h1-semibold my-12 mb-4 text-white-900">
        <span className="gradient-text text-white-900">
          <AnimatePresence>
            {sentence1.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                onAnimationComplete={() => {
                  if (index === sentence1.length - 1) {
                    setAnimationComplete(true);
                  }
                }}>
                {letter}
              </motion.span>
            ))}
          </AnimatePresence>
          {animationComplete && (
            <AnimatePresence>
              {sentence2.split("").map((letter, index) => (
                <motion.span
                  className="text-white-900"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}>
                  {letter}
                </motion.span>
              ))}
            </AnimatePresence>
          )}
        </span>
      </h1>
      <motion.p
        className="paragraph-regular mx-auto md:mx-0 text-white-800 w-3/4 md:w-full mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}>
        Web developer creating top-notch digital experiences with passion and
        precision
      </motion.p>
    </div>
  );
}
