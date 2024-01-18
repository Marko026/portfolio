import ProjectCard from "@/components/ProjectCard/page";
import { getProjects } from "@/sanity/utils/utilsSanity";
import { allProjects } from "@/types";
import React from "react";

export const revalidate = 30;

const CaseStudies = async () => {
  const allCaseStudies = await getProjects();

  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-5 my-20 ">
      {allCaseStudies.map((project: allProjects) => (
        <ProjectCard project={project} key={project._id} />
      ))}
    </div>
  );
};

export default CaseStudies;
