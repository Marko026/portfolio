"use client";
import { allProjects } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

type Props = {
  slug: string;
  projects: allProjects[];
};
const NextStudyButton = ({ slug, projects }: Props) => {
  const router = useRouter();
  const currenProject = useRef<allProjects | null>(null);
  const nextProject = useRef<allProjects | null>(null);

  useEffect(() => {
    const currentIndex = projects.findIndex((project) => project.slug === slug);
    currenProject.current = projects[currentIndex];
    nextProject.current = projects[currentIndex + 1];
  }, [slug, projects]);
  const handleNext = () => {
    if (nextProject.current) {
      router.push(`/work/${nextProject.current.slug}`);
    }
  };

  return (
    <div onClick={handleNext} className="cursor-pointer">
      <div className="flex flex-col-reverse sm:flex-row items-end  sm:items-center gap-2">
        <p className="text-sm sm:text-2xl font-bold">Next Study</p>
        <Image
          src="/icons/arrow-right.svg"
          alt="hero"
          width={30}
          height={30}
          priority={true}
        />
      </div>
      <p className="text-white-800 text-xs sm:text-sm">
        Filmpire - AI Movie App
      </p>
    </div>
  );
};

export default NextStudyButton;
