import React from "react";
import type { Metadata } from "next";
import { getProjects } from "@/sanity/utils/utilsSanity";
import ProjectCards from "@/components/ProjectCards/page";
import { MotionDiv } from "@/components/MotionDiv";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Projects that reflect my passion, skill, and commitment",
};

export const revalidate = 30;

const CaseStudies = async () => {
  const allCaseStudies = await getProjects();

  return (
    <div className="flex max-w-7xl mx-auto flex-col">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.15 }}
        className=" text-center mt-12 md:mt-28">
        <h1 className="h1-semibold text-white-900">
          Passionate About Crafting Functional Online Experiences
        </h1>
        <p className="paragraph-regular text-white-800 mt-3 md:mt-6">
          Dive into a spectrum of projects that reflect my passion, skill, and
          commitment
        </p>
      </MotionDiv>
      <ProjectCards allCaseStudies={allCaseStudies} />
    </div>
  );
};

export default CaseStudies;
