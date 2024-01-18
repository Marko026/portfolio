import { urlFor } from "@/sanity/lib/sanity";
import { TechProps } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  technology: TechProps;
};

const Technologies = async ({ technology }: Props) => {
  return (
    <Image
      src={urlFor(technology.techImage).url()}
      alt={technology.name}
      width={100}
      height={100}
      priority={true}
      className="object-cover w-1/5 h-1/5 md:w-1/8 lg:w-1/12 rounded-lg mb-3"
    />
  );
};

export default Technologies;
