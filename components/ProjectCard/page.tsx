import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { allProjects } from "@/types";
import { urlFor } from "@/sanity/lib/sanity";
import WorkInProgress from "../WorkInProgress/page";

const ProjectCard = ({ project }: { project: allProjects }) => {
  return (
    <>
      {project.workInProgress === true ? (
        <WorkInProgress project={project} />
      ) : (
        <Link
          href={`/work/${project.slug}`}
          key={project._id}
          className="md:w-[55%] relative">
          <Card className="border-none bg-black-200 p-3 shadow-md hover:shadow-glow duration-300">
            <div className="bg-white rounded-xl ">
              <CardHeader className="!p-0">
                <div className="relative">
                  <Image
                    src={urlFor(project.imageTitle).url()}
                    alt={project.title}
                    width={300}
                    height={200}
                    priority={true}
                    className={`object-contain w-full h-full rounded-lg md:mb-3`}
                  />
                  <div className="absolute left-0 right-0 h-1/3 bottom-0 bg-gradient-to-t from-black-200 to bg-transparent"></div>
                </div>
                <CardTitle className="h2-normal !mb-2">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="!p-0 ">
                <p className="base-regular text-white-800 ">
                  {project.subtitle}
                </p>
              </CardContent>
            </div>
          </Card>
        </Link>
      )}
    </>
  );
};

export default ProjectCard;
