import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { allProjects } from "@/types";
import { urlFor } from "@/sanity/lib/sanity";
const ProjectCard = ({ project }: { project: allProjects }) => {
  return (
    <Link href={`/work/${project.slug}`} key={project._id} className="w-[55%]">
      <Card className="border-none bg-black-200">
        <div className="bg-white rounded-xl shadow-md hover:shadow-glow duration-500">
          <CardHeader className="p-1.5">
            <Image
              src={urlFor(project.imageTitle).url()}
              alt={project.title}
              width={300}
              height={200}
              priority={true}
              className="object-contain w-full h-full rounded-lg mb-3"
            />
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="mb-5 !p-2 ">
            <p className="base-regular text-white-800 mb-3">
              Unleashing Opportunities in Your Job Search Journey
            </p>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
