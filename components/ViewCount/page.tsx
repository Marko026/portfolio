import React from "react";

const ViewCount = ({views}: {
  views: number 
}) => {
  return <div className="text-right text-white-800 my-10">Views:{views}</div>;
};

export default ViewCount;
