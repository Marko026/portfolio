"use client";
import Link from "next/link";
import React, { useRef, useState, useEffect, use } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { AllProjects } from "@/types";
import { urlFor } from "@/sanity/lib/sanity";
import WorkInProgress from "../WorkInProgress/page";
import { motion, useInView } from "framer-motion";

const ProjectCard = ({ project }: { project: AllProjects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated, isInView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <>
      {project.workInProgress === true ? (
        <WorkInProgress project={project} />
      ) : (
        <Link
          href={`/work/${project.slug}`}
          key={project._id}
          className="relative md:w-[55%]">
          <Card className="border-none rounded-3xl  p-3 shadow-md hover:shadow-glow duration-500">
            <motion.div
              variants={variants}
              animate={hasAnimated ? "show" : "hidden"}
              transition={{ duration: 1 }}
              ref={ref}
              className="rounded-xl ">
              <CardHeader className="!p-0">
                <Image
                  src={urlFor(project.imageTitle).url()}
                  alt={project.title}
                  width={300}
                  height={200}
                  priority={true}
                  className={`object-contain w-full h-full rounded-lg md:mb-3`}
                />
                <CardTitle className="h2-normal line-clamp-1 !mb-2 text-white-900">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="!p-0 ">
                <p className="base-regular text-white-800">
                  {project.subtitle}
                </p>
              </CardContent>
            </motion.div>
          </Card>
        </Link>
      )}
    </>
  );
};

export default ProjectCard;
