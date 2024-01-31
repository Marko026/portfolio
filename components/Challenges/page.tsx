import React from "react";
type ChallengeProps = {
  challenge: string;
};

const Challenges = ({ challenge }: ChallengeProps) => {
  return <li className="text-left text-white-800">{challenge}</li>;
};

export default Challenges;
