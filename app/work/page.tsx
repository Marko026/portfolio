import ProjectCard from "@/components/ProjectCard/page";
import Tags from "@/components/Tags/page";
import { getProjects } from "@/sanity/utils/utilsSanity";
import { allProjects } from "@/types";
import React from "react";

export const revalidate = 30;

const CaseStudies = async () => {
  const allCaseStudies = await getProjects();

  return (
    <div>
      <div className=" max-w-4xl mx-auto text-center mt-10 md:mt-28">
        <h1 className="h1-semibold">
          Passionate About Crafting Functional Online Experiences
        </h1>
        <p className="paragraph-regular text-white-800 mt-6">
          Dive into a spectrum of projects that reflect my passion, skill, and
          commitment
        </p>
      </div>
      <div className=" flex flex-col w-full gap-7 sm:gap-14 py-10 md:py-28 sm:[&>*:nth-child(even)]:self-end sm:[&>*:nth-child(odd)]:self-start">
        {allCaseStudies.map((project: allProjects) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
