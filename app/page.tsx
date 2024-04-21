import { SpotlightPreview } from "@/components/SpotlightPreview/page";
import { ImageTrailHero } from "@/components/MotivationText/page";
import Image from "next/image";
import Testimonials from "@/components/Testimonials/page";
import LinkMyWork from "@/components/SeemyWork/page";
import { MotionDiv } from "@/components/MotionDiv";
import { getProjects } from "@/sanity/utils/utilsSanity";
import ProjectCards from "@/components/ProjectCards/page";
import Contact from "@/components/Contact/Contact";

export default async function Home() {
  const allCaseStudies = await getProjects();

  return (
    <div className="mt-10 md:mt-32 relative ">
      <div className="absolute  sm:top-80 -z-20">
        <ImageTrailHero />
      </div>

      <div className="max-w-4xl mx-auto text-center m-0 z-10">
        <SpotlightPreview />
        <LinkMyWork />
        <Image
          src="/images/dev.png"
          width={850}
          height={567}
          priority={true}
          className="object-cover h-full z-100 w-full mb-20"
          alt="dev"
        />
      </div>
      <Testimonials />
      <section id="work" className="flex max-w-7xl mx-auto flex-col">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15 }}
          className=" text-center mt-12 md:mt-16">
          <h1 className="h1-semibold text-white-900">
            My projects that speak for themselves
          </h1>
          <p className="paragraph-regular max-w-2xl mx-auto text-white-800 mt-3 md:mt-6">
            I have worked on a variety of projects, from web development to
            design. Here are some of my most recent projects.
          </p>
        </MotionDiv>
        <ProjectCards allCaseStudies={allCaseStudies} />
        <Contact />
      </section>
    </div>
  );
}
