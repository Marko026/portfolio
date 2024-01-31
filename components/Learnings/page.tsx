import React from "react";
type LearningProps = {
  learning: string;
};

const Learnings = ({ learning }: LearningProps) => {
  return <li className="text-left text-white-800">{learning}</li>;
};

export default Learnings;
