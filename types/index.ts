export interface Params {
  slug: string;
}
export type ChallengesProps = {
  _id: string;
  title: string;
  challenges: string;
};
export type LearningsProps = {
  _id: string;
  title: string;
  challenges: string;
};

export interface AllProjects {
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

export interface Tag {
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
