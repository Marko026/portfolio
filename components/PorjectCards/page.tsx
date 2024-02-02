"use client";
import React, { useRef } from "react";
import ProjectCard from "@/components/ProjectCard/page";
import { AllProjects } from "@/types";
import { motion } from "framer-motion";
type Props = {
  allCaseStudies: AllProjects[];
};

const ProjectCards = ({ allCaseStudies }: Props) => {
  const ref = useRef(null);
  const variants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className=" flex flex-col w-full gap-7 sm:gap-14 py-10 md:py-28 sm:[&>*:nth-child(even)]:self-end sm:[&>*:nth-child(odd)]:self-start">
      {allCaseStudies.map((project: AllProjects) => (
        <motion.div
          className="md:w-[55%]"
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 3 }}
          ref={ref}
          key={project._id}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCards;
