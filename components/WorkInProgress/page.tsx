import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
import { AllProjects } from "@/types";

const WorkInProgress = ({ project }: { project: AllProjects }) => {
  return (
    <div className="md:w-[55%]">
      <Card className="border-none bg-black-200 p-4 shadow-md hover:shadow-glow duration-300">
        <div className="bg-white rounded-xl ">
          <CardHeader className="!p-0">
            <div className="relative group">
              <Image
                src={urlFor(project.imageTitle).url()}
                alt={project.title}
                width={300}
                height={200}
                priority={true}
                className={`object-fill w-full h-full rounded-lg md:mb-3 ${
                  project.workInProgress === true && "filter blur-md"
                }`}
              />
              <p className="absolute opacity-0 transform rotate-45 group-hover:opacity-100 duration-200  left-[85%] top-1/2 -translate-x-1/2 -translate-y-1/2  text-white-900 text-2xl xl:text-4xl font-semibold">
                Work in Progress
              </p>
            </div>
            <CardTitle className="h2-normal !mb-2 text-white-900">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="!p-0 ">
            <p className="base-regular text-white-800 ">{project.subtitle}</p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default WorkInProgress;
