"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; path: string }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    let direction = current - scrollYProgress.getPrevious();

    if (scrollYProgress.get() < 0.1) {
      setVisible(true);
    } else {
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });
  const path = usePathname();

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 1500);
  }, [path]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -150,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto  z-[5000]  items-center justify-center",
          className
        )}>
        <div className="md:w-[450px]  flex justify-center px-6 py-3 md:py-7  border  border-gray-700 rounded-full  bg-black-100 bg-opacity-50 gap-10 ">
          {navItems.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className={`relative max-w-[268px]`}>
              <p
                className={` paragraph-regular hover:text-white-900 ${
                  path === page.path ? "text-white-900" : "text-white-800"
                }`}>
                {page.name}
              </p>

              <Image
                src="/images/indicator.svg"
                width={8}
                height={8}
                alt="indicator"
                priority={true}
                className={`absolute
         ${path === page.path ? "block" : "hidden"}
         md:bottom-[-17px] right-[50%] animate-pulse transform -translate-x-50% rounded-full`}
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
