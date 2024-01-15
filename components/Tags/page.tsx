import { getTechnologies } from "@/sanity/utils/utilsSanity";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { TagProps } from "@/types";

const Tags = async () => {
  const tags = await getTechnologies();
  return (
    <div className="flex justify-between items-center gap-2 py-5 max-w-xs">
      {tags.map((tag: TagProps) => (
        <Badge
          variant="outline"
          className="bg-gray-200 justify-center dark:text-black  py-1 hover:bg-gray-100  w-full text-center border-gray-200 dark:border-gray-80 "
          key={tag._id}>
          {tag.name}
        </Badge>
      ))}
    </div>
  );
};

export default Tags;
