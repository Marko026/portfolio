import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
import { AllProjects } from "@/types";
import { motion, useInView } from "framer-motion";

const WorkInProgress = ({ project }: { project: AllProjects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={isInView ? "show" : "hidden"}
      transition={{ duration: 1 }}
      className="relative md:w-[55%]">
      <Card className="border-none  p-4 rounded-3xl group  overflow-hidden">
        <div className="bg-white rounded-3xl ">
          <CardHeader className="!p-0">
            <div className="relative group">
              <Image
                src={urlFor(project.imageTitle).url()}
                alt={project.title}
                width={300}
                height={200}
                priority={true}
                className={`object-fill w-full h-full duration-500 group-hover:scale-105 rounded-lg md:mb-3 ${
                  project.workInProgress === true && "filter blur-md"
                }`}
              />
              <p className="absolute opacity-0 transform rounded-3xl rotate-45 group-hover:opacity-100 duration-200  left-[85%] top-1/2 -translate-x-1/2 -translate-y-1/2  text-white-900 text-2xl xl:text-4xl font-semibold">
                Work in Progress
              </p>
            </div>
            <CardTitle className="h2-normal pl-1 line-clamp-1 text-white-900">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="!pl-1 ">
            <p className="base-regular text-white-800 ">{project.subtitle}</p>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

export default WorkInProgress;
