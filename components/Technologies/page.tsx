import { urlFor } from "@/sanity/lib/sanity";
import { TechProps } from "@/types";
import Image from "next/image";
import React from "react";

const Technologies = async ({ tag }: TechProps) => {
  return (
    <div className="w-[13%]">
      <Image
        src={urlFor(tag.techImage).url()}
        alt={tag.name}
        width={50}
        priority={true}
        height={50}
        className="w-3/4 rounded-lg md:mb-3 "
      />
    </div>
  );
};

export default Technologies;
