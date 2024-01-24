import React from "react";
import { Badge } from "@/components/ui/badge";
import { TagProps } from "@/types";

const Tags = () => {
  return (
    <Badge
      variant="outline"
      className="bg-gradient-to-r from-blue-600 via-blue-200 to-blue-400 justify-center dark:text-black  py-1 hover:bg-gray-100  w-full text-center border-gray-200 dark:border-gray-80 ">
      tag
    </Badge>
  );
};

export default Tags;
