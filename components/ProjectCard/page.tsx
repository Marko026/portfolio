import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { AllProjects } from "@/types";
import { urlFor } from "@/sanity/lib/sanity";
import WorkInProgress from "../WorkInProgress/page";

const ProjectCard = ({ project }: { project: AllProjects }) => {
  return (
    <>
      {project.workInProgress === true ? (
        <WorkInProgress project={project} />
      ) : (
        <Link
          href={`/work/${project.slug}`}
          key={project._id}
          className="relative">
          <Card className="border-none rounded-3xl  p-3 shadow-md hover:shadow-glow duration-500">
            <div className="bg-white rounded-xl ">
              <CardHeader className="!p-0">
                <Image
                  src={urlFor(project.imageTitle).url()}
                  alt={project.title}
                  width={300}
                  height={200}
                  priority={true}
                  className={`object-contain w-full h-full rounded-lg md:mb-3`}
                />
                <CardTitle className="h2-normal !mb-2 text-white-900">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="!p-0 ">
                <p className="base-regular text-white-800">
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
