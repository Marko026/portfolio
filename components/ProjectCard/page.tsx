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
import Tags from "../Tags/page";
const ProjectCard = ({ project }: { project: allProjects }) => {
  return (
    <Link href={`/work/${project.slug}`} key={project._id}>
      <Card>
        <CardHeader>
          <Image
            src={urlFor(project.imageTitle).url()}
            alt={project.title}
            width={300}
            height={200}
            priority={true}
            className="object-cover w-full h-full rounded-lg mb-3"
          />
          <CardTitle className="">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-4 text-pretty">{}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
