interface Params {
  slug: string;
}
type ChallengesProps = {
  _id: string;
  title: string;
  challenges: string;
};
type LearningsProps = {
  _id: string;
  title: string;
  challenges: string;
};

export interface allProjects {
  params: Params;
  _id: string;
  subtitle: string;
  title: string;
  slug: string;
  imageTitle: string;
  problem: string;
  tags: TagProps[];
  overview: string;
  reflection: string;
  finalSite: {
    link: string;
  };
  learnings: LearningsProps[];
  challenges: ChallengesProps[];
  future: string;
  workInProgress: boolean;
}

interface Tag {
  _id: string;
}

export interface TagProps {
  tag: Tag;
  _id: string;
  name: string;
  techImage: string;
}

export interface TechProps {
  tag: TagProps;
}
