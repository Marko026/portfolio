"use client";
import { allProjects } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

type Props = {
  slug: string;
  projects: allProjects[];
};

const PreviousButton = ({ slug, projects }: Props) => {
  const router = useRouter();
  const currentProject = useRef<allProjects | null>(null);
  const previousProject = useRef<allProjects | null>(null);
  useEffect(() => {
    const currentIndex = projects.findIndex((project) => project.slug === slug);
    currentProject.current = projects[currentIndex];
    previousProject.current = projects[currentIndex - 1];
  }, [slug, projects]);
  const handlePrevious = () => {
    if (previousProject.current?.workInProgress) return;
    if (previousProject.current) {
      router.push(`/work/${previousProject.current.slug}`);
    }
  };

  return (
    <div onClick={handlePrevious} className="cursor-pointer">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <Image
          src="/icons/arrow-left.svg"
          alt="hero"
          width={30}
          height={30}
          priority={true}
        />
        <p className="text-sm sm:text-2xl font-bold text-white-900">
          Previous Study
        </p>
      </div>
      <p className="text-white-800 text-xs  sm:text-sm">
        JobIT - Job Finding App
      </p>
    </div>
  );
};

export default PreviousButton;
