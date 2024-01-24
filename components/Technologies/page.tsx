import { urlFor } from "@/sanity/lib/sanity";
import { TechProps } from "@/types";
import Image from "next/image";
import React from "react";

const Technologies = async ({ tag }: TechProps) => {
  return (
    <div>
      <Image
        src={urlFor(tag.techImage).url()}
        alt={tag.name}
        width={50}
        height={50}
        className="object-contain w-full h-full rounded-lg md:mb-3 "
      />
    </div>
  );
};

export default Technologies;
