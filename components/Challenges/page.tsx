import React from "react";
type ChallengeProps = {
  challenge: string;
};

const Challenges = ({ challenge }: ChallengeProps) => {
  return <li>{challenge}</li>;
};

export default Challenges;
