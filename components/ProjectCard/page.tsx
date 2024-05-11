'use client';
import Link from 'next/link';
import React, { useRef, useState, useEffect, use } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { AllProjects } from '@/types';
import { urlFor } from '@/sanity/lib/sanity';
import { motion, useInView } from 'framer-motion';
import LinkMyWork from '../SeemyWork/page';

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
        className="relative md:w-[55%] px-10 pt-5 rounded-3xl overflow-hidden">
        <Card className="border-none ">
          <motion.div
            variants={variants}
            animate={hasAnimated ? 'show' : 'hidden'}
            transition={{ duration: 1 }}
            ref={ref}>
            <CardHeader className="!p-0">
              <Image
                src={urlFor(project.imageTitle).url()}
                alt={project.title}
                width={300}
                height={200}
                priority={true}
                className={`object-cover w-full  h-full  mb-5`}
              />

              <CardTitle className="h2-normal pl-2 !w-full !mb-2 line-clamp-1 text-white-900">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="!pl-2 !pr-0">
              <p className="base-regular line-clamp-2 md:line-clamp-3 mb-3  text-white-800">
                {project.subtitle}
              </p>
              <div className="group sm:mt-9  w-full relative  transition-transform duration-300 active:scale-95">
                <div className=" px-2 rounded-2xl flex items-center gap-2 relative z-0 overflow-hidden bg-transparent  font-semibold uppercase text-violet-300 transition-all duration-500 bg-gradient-to-r from-[#0026FF] to-[#C1A4FF] ">
                  <div className="px-4 py-1 mx-auto  md:px-6 flex gap-2 md:py-3 rounded-full">
                    <p className="paragraph-regular  text-white-900 capitalize">
                      Go to project
                    </p>
                    <Image
                      src="/icons/Vector.svg"
                      width={12}
                      height={12}
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </motion.div>
        </Card>
      </Link>
    </>
  );
};

export default ProjectCard;
