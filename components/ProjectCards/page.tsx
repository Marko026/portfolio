import React from "react";
import ProjectCard from "@/components/ProjectCard/page";
import { AllProjects } from "@/types";
type Props = {
  allCaseStudies: AllProjects[];
};

const ProjectCards = ({ allCaseStudies }: Props) => {
  return (
    <div className=" flex flex-col w-full gap-7 sm:gap-14 py-10 md:py-28 sm:[&>*:nth-child(even)]:self-end sm:[&>*:nth-child(odd)]:self-start">
      {allCaseStudies.map((project: AllProjects) => (
        <ProjectCard project={project} key={project._id} />
      ))}
    </div>
  );
};

export default ProjectCards;
