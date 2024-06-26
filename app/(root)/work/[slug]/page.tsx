import Image from 'next/image';

import NextStudyButton from '@/components/NextStudyButton/page';
import PreviousStudyButton from '@/components/PreviousStudyButton/page';
import Technologies from '@/components/Technologies/page';

import { urlFor } from '@/sanity/lib/sanity';

import { MotionDiv } from '@/components/MotionDiv';
import { PinContainer } from '@/components/ui/3d-pin';
import { TracingBeam } from '@/components/ui/tracing-beam';
import {
  getNextAndPrevious,
  getProject,
  incrementViewCount,
} from '@/sanity/utils/utilsSanity';
import { TagProps } from '@/types';
import { Metadata } from 'next';

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProject(params.slug);
  const title = project.title;
  const description = project.overview;
  return {
    title: title,
    description: description,
  };
}

const ProjectDetails = async ({ params }: { params: any }) => {
  const [_, project, { nextProject, previousProject }] = await Promise.all([
    incrementViewCount(params.slug),
    getProject(params?.slug),
    getNextAndPrevious(params?.slug),
  ]);

  const textSplit = project.title.split('-');

  return (
    <TracingBeam>
      <div>
        <div className=" max-w-5xl mx-auto text-center mt-10 md:mt-28">
          <h1 className="h1-semibold mb-3">
            <span className="bg-gradient-to-r from-[#0026FF] to-[#C1A4FF] bg-clip-text text-transparent">
              {textSplit[0]}
            </span>
            <span className="text-white-900">{`-${textSplit[1]}`}</span>
          </h1>
          <p className="paragraph-regular text-white-800">{project.subtitle}</p>
        </div>
        <Image
          src={urlFor(project.imageTitle).url()}
          alt="hero"
          width={500}
          height={500}
          priority={true}
          className="w-full h-full rounded-lg mt-10 max-h-[680px]"
        />
        <div className="text-right text-white-800 my-10">
          Views:{project.views}
        </div>
      </div>
      <div className="flex flex-col space-y-7 sm:space-y-14">
        <div className="flex flex-col  sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal text-left mb-3 sm:mb-0">Overview</h2>
          <MotionDiv className="sm:w-3/4 base-regular text-left w-full text-white-800">
            {project.overview}
          </MotionDiv>
        </div>
        <div className="flex flex-col  sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal text-left mb-3">Problem</h2>
          <div className="sm:w-3/4 base-regular text-left w-full text-white-800">
            {project.problem}
          </div>
        </div>
        <div className="flex flex-col  sm:flex-row justify-between">
          <h2 className="w-full sm:w-1/4 text-left h2-normal mb-3">
            Tech Stack
          </h2>
          <div className="sm:w-3/4 base-regular flex justify-start gap-4 flex-wrap text-left w-full text-white-800">
            {project.tags.map((tag: TagProps) => (
              <Technologies key={tag._id} tag={tag} />
            ))}
          </div>
        </div>
        <div className="flex flex-col  sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal text-left mb-3">Reflection</h2>
          <div className="sm:w-3/4 base-regular text-left w-full text-white-800">
            {project.reflection}
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between">
          <div className=" w-full xl:w-1/4 ">
            <h2 className="h2-normal flex items-center gap-2 text-center xl:text-left mb-2">
              Final Site
              <Image
                src="/icons/vector.svg"
                width={16}
                height={16}
                alt="final-site"
                className="md:mt-2"
              />
            </h2>
          </div>
          <div className="relative py-3 sm:py-10 md:py-16 lg:py-28 xl:w-full ">
            <PinContainer
              href={project.finalSite.link || ''}
              className=" bg-black-200 bg-opacity-0 rounded-lg w-full ">
              <Image
                src={urlFor(project.finalSite.siteImage).url()}
                alt="hero"
                width={500}
                height={500}
                priority={true}
                className="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[450px]"
              />
            </PinContainer>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal text-left mb-3">Learning</h2>
          <ol className="sm:w-3/4 px-4 sm:px-0 w-full base-regular list-decimal space-y-6 text-white-800">
            {project.learnings.map((learning: string, idx: any) => (
              <li key={idx} className="text-left text-white-800">
                {learning}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal text-left mb-3">Challenges</h2>
          <ol className="sm:w-3/4 px-4 sm:px-0 w-full base-regular list-decimal space-y-6 text-white-800">
            {project.challenges.map((challenge: string, idx: any) => (
              <li key={idx} className="text-left text-white-800">
                {challenge}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <h2 className="w-1/4 h2-normal text-left mb-3">Future</h2>
          <div className="sm:w-3/4 w-full base-regular text-left text-white-800">
            {project.future}
          </div>
        </div>
      </div>
      <div className="flex justify-between py-10 sm:py-28">
        {previousProject._id ? (
          <PreviousStudyButton previousProject={previousProject} />
        ) : (
          <div className="invisible"></div>
        )}
        {nextProject._id && <NextStudyButton nextProject={nextProject} />}
      </div>
    </TracingBeam>
  );
};

export default ProjectDetails;
