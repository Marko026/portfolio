import { urlFor } from "@/sanity/lib/sanity";
import { getTechnologies } from "@/sanity/utils/utilsSanity";
import { TechProps } from "@/types";
import Image from "next/image";
import React from "react";

const Technologies = async () => {
  const technologies = await getTechnologies();

  return (
    <div className="flex justify-between items-center py-20">
      {technologies.map((technology: TechProps) => (
        <div
          key={technology._id}
          className="flex justify-center items-center w">
          <Image
            src={urlFor(technology.techImage).url()}
            alt={technology.name}
            width={100}
            height={100}
            className="rounded-full object-cover py-10 px-5 bg-gray-300 border-gray-200 dark:border-gray-800  "
          />
        </div>
      ))}
    </div>
  );
};

export default Technologies;
