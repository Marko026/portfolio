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
  title: string;
  slug: string;
  imageTitle: string;
  tags: TagProps[];
  overview: string;
  reflection: string;
  finalSite: {
    link: string;
  };
  learnings: LearningsProps[];
  challenges: ChallengesProps[];
  featured: string;
}

export interface TechProps {
  _id: string;
  name: string;
  techImage: string;
}

export interface TagProps {
  _id: string;
  name: string;
}
