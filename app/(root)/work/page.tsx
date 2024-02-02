import React from "react";
import { getProjects } from "@/sanity/utils/utilsSanity";
import ProjectCards from "@/components/PorjectCards/page";

export const revalidate = 30;

const CaseStudies = async () => {
  const allCaseStudies = await getProjects();

  return (
    <div>
      <div className=" max-w-4xl mx-auto text-center mt-10 md:mt-28">
        <h1 className="h1-semibold text-white-900">
          Passionate About Crafting Functional Online Experiences
        </h1>
        <p className="paragraph-regular text-white-800 mt-6">
          Dive into a spectrum of projects that reflect my passion, skill, and
          commitment
        </p>
      </div>
      <ProjectCards allCaseStudies={allCaseStudies} />
    </div>
  );
};

export default CaseStudies;
