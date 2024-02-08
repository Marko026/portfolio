"use client";
import React from "react";
import { motion } from "framer-motion";

export const ImageTrailHero = () => {
  return (
    <section className=" bg-transparent w-full">
      <WatermarkWrapper />
    </section>
  );
};

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text="Get motivated" />
      <Watermark text="Live inspired" reverse />
      <Watermark text="Find your passion" />
    </>
  );
};

const Watermark = ({ reverse, text }: { reverse?: boolean; text: string }) => (
  <div className="md:flex select-none overflow-hidden">
    <TranslateWrapper reverse={reverse || false}>
      <span className="w-fit  text-[5vmax] font-black uppercase leading-[0.75] text-slate-600 text-opacity-35">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse || false}>
      <span className="w-fit text-[5vmax] font-black uppercase leading-[0.75] text-slate-600 text-opacity-25">
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: React.ReactNode;
  reverse: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
      {children}
    </motion.div>
  );
};

const MouseImageTrail = ({ children }: { children: React.ReactNode }) => {
  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  return <div className=" overflow-hidden">{children}</div>;
};
