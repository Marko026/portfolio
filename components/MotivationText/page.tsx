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
      <Watermark text="FullStack" />
      <Watermark text="NextJS React" />
      <Watermark text="MongoDb Prisma" reverse />
      <Watermark text="JavaScript FramerMotion" reverse />
    </>
  );
};

const Watermark = ({ reverse, text }: { reverse?: boolean; text: string }) => (
  <div className="md:flex select-none overflow-hidden">
    <TranslateWrapper reverse={reverse || false}>
      <span className="w-fit  text-[5vmax] font-black uppercase leading-[0.75] text-slate-600 text-opacity-35">
        {text}
      </span>
      <span className="w-fit  text-[5vmax] font-black uppercase leading-[0.75] text-slate-600 text-opacity-35">
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
