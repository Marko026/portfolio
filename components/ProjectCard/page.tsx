"use client";
import Link from "next/link";
import React, { useRef, useState, useEffect, use } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { AllProjects } from "@/types";
import { urlFor } from "@/sanity/lib/sanity";
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
      <Link
        href={`/work/${project.slug}`}
        key={project._id}
        className="relative md:w-[55%] rounded-2xl overflow-hidden">
        <Card className="border-none">
          <motion.div
            variants={variants}
            animate={hasAnimated ? "show" : "hidden"}
            transition={{ duration: 1 }}
            ref={ref}>
            <CardHeader className="!p-0">
              <Image
                src={urlFor(project.imageTitle).url()}
                alt={project.title}
                width={300}
                height={200}
                priority={true}
                className={`object-cover w-full h-96 rounded-lg mb-5 duration-300 hover:scale-105`}
              />

              <CardTitle className="h2-normal pl-2 !mb-2 line-clamp-1 text-white-900">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="!pl-2">
              <p className="base-regular text-white-800">{project.subtitle}</p>
            </CardContent>
          </motion.div>
        </Card>
      </Link>
    </>
  );
};

export default ProjectCard;
