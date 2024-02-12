import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="text-center py-20 flex flex-col space-y-5 justify-between lg:text-left max-w-6xl mx-auto font-black leading-[1.25]">
      <div className=" w-full md:w-3/5">
        <h2 className="text-[52px] mb-5 text-white-900">About Me</h2>
        <p className="text-white-800 text-[16px] md:text-left !leading-[25px] line-clamp-6">
          Hello, I'm Marko, a technology enthusiast originally from Serbia, now
          residing in the beautiful city of Vienna, Austria. I'm a firm believer
          in progress through dedicated and productive work. I thrive in
          collaborative environments and derive immense satisfaction from
          helping others. While I prefer my work to speak for itself, I
          understand the importance of sharing a bit about my personal journey.
          I'm a relentless pursuer of goals, never one to back down from a
          challenge. This tenacity extends beyond my professional life into my
          personal life where, as a husband and father of two, I continually
          strive to provide the best for my family. My passion for technology is
          not just about fascination with the latest gadgets or software. It's
          about envisioning a future where technology serves all of humanity. My
          dream is to contribute to a project that has a far-reaching, positive
          impact on people's lives. Thank you for taking the time to get to know
          me a little better. I look forward to the opportunity to learn more
          about you and how we might collaborate in the future.
        </p>
      </div>
      <div className="relative">
        <Image
          src="/images/team.jpg"
          width={300}
          height={300}
          alt="aboutMe"
          priority={true}
          className="object-cover h-[250px] md:h-auto rounded-3xl w-full md:w-[300px] "
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black-200 to-transparent shadow-lg" />
      </div>
    </div>
  );
};

export default AboutMe;
