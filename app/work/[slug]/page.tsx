import Challenges from "@/components/Challenges/page";
import Footer from "@/components/Footer/page";
import Technologies from "@/components/Technologies/page";
import { urlFor } from "@/sanity/lib/sanity";
import Learnings from "@/components/Learnings/page";
import { getProject } from "@/sanity/utils/utilsSanity";
import { TagProps, allProjects } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 30;

const Project = async ({ params }: allProjects) => {
  const project = await getProject(params.slug);

  return (
    <div>
      <div>
        <div className=" max-w-4xl mx-auto text-center mt-10 md:mt-28">
          <h1 className="h1-semibold mb-3">
            <span className="bg-gradient-to-r from-[#0026FF] to-[#C1A4FF] bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>
          <p className="paragraph-regular text-white-800">{project.subtitle}</p>
        </div>
        <Image
          src={urlFor(project.imageTitle).url()}
          alt="hero"
          width={500}
          height={500}
          className="w-full h-full rounded-lg mt-10 mb-10 sm:mb-20 max-h-[680px]"
        />
      </div>
      <div className="flex flex-col space-y-7 sm:space-y-14">
        <div className="flex flex-col  sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal mb-3 sm:mb-0">Overview</h2>
          <div className="sm:w-3/4 base-regular text-left w-full text-white-800">
            {project.overview}
          </div>
        </div>
        <div className="flex flex-col  sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal mb-3">Problem</h2>
          <div className="sm:w-3/4 base-regular text-left w-full text-white-800">
            {project.problem}
          </div>
        </div>
        <div className="flex flex-col  sm:flex-row justify-between">
          <h2 className="w-full sm:w-1/4 h2-normal mb-3">Tech Stack</h2>
          <div className="sm:w-3/4 base-regular flex justify-start gap-4 flex-wrap text-left w-full text-white-800">
            {project.tags.map((tag: TagProps) => (
              <Technologies key={tag._id} tag={tag} />
            ))}
          </div>
        </div>
        <div className="flex flex-col  sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal mb-3">Reflection</h2>
          <div className="sm:w-3/4 base-regular text-left w-full text-white-800">
            {project.reflection}
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-3 justify-between">
          <div className=" w-full xl:w-1/4 ">
            <h2 className="h2-normal ">Final Site</h2>
            <Link
              href={project.finalSite.link}
              target="_blank"
              className="paragraph-regular mb-3 text-white-800">
              {project.finalSite.link}
              <Image
                src="/icons/Vector.svg"
                width={15}
                height={15}
                alt="arrow"
                className="sm:inline-block ml-2"
              />
            </Link>
          </div>
          <div className="xl:w-3/4  bg-black-200 bg-opacity-50 rounded-lg">
            <div className="flex justify-center">
              <Image
                src={urlFor(project.finalSite.siteImage).url()}
                alt="hero"
                width={500}
                height={500}
                className=" w-full my-10 mx-16 max-h-[532px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal mb-3">Learning</h2>
          <ol className="sm:w-3/4 px-4 sm:px-0 w-full base-regular list-decimal space-y-6 text-white-800">
            {project.learnings.map((learning: string) => (
              <Learnings key={learning} learning={learning} />
            ))}
          </ol>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal mb-3">Challenges</h2>
          <ol className="sm:w-3/4 px-4 sm:px-0 w-full base-regular list-decimal space-y-6 text-white-800">
            {project.challenges.map((challenge: string) => (
              <Challenges key={challenge} challenge={challenge} />
            ))}
          </ol>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal mb-3">Future</h2>
          <div className="sm:w-3/4 w-full base-regular text-white-800">
            {project.future}
          </div>
        </div>
      </div>
      <div className="flex justify-between  py-10 sm:py-28">
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <Image
              src="/icons/arrow-left.svg"
              alt="hero"
              width={30}
              height={30}
            />
            <p className="text-sm sm:text-2xl font-bold">Previous Study</p>
          </div>
          <p className="text-white-800 text-xs  sm:text-sm">
            JobIT - Job Finding App
          </p>
        </div>
        <div>
          <div className="flex flex-col-reverse sm:flex-row items-end  sm:items-center gap-2">
            <p className="text-sm sm:text-2xl font-bold">Previous Study</p>
            <Image
              src="/icons/arrow-right.svg"
              alt="hero"
              width={30}
              height={30}
            />
          </div>
          <p className="text-white-800 text-xs sm:text-sm">
            Filmpire - AI Movie App
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
