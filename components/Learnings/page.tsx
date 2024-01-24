import React from "react";
type LearningProps = {
  learning: string;
};

const Learnings = ({ learning }: LearningProps) => {
  return <li>{learning}</li>;
};

export default Learnings;
