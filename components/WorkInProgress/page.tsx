import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
import { allProjects } from "@/types";

const WorkInProgress = ({ project }: { project: allProjects }) => {
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
                className={`object-contain w-full h-full rounded-lg md:mb-3 ${
                  project.workInProgress === true && "filter blur-sm"
                }`}
              />
              <p className="absolute opacity-0 transform rotate-45 group-hover:opacity-100 duration-200  left-[85%] top-1/2 -translate-x-1/2 -translate-y-1/2  text-white-900 text-2xl xl:text-4xl font-semibold">
                Work in Progress
              </p>
              <div className="absolute left-0 right-0 h-1/3 bottom-0 bg-gradient-to-t from-black-200 to bg-transparent"></div>
            </div>
            <CardTitle className="h2-normal !mb-2">{project.title}</CardTitle>
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
