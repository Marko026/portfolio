interface Params {
  slug: string;
}

export interface allProjects {
  params: Params;
  _id: string;
  title: string;
  slug: string;
  description: string;
  imageTitle: string;
  content: string;
  startDate: string;
  endDate: string;
  role: string;
  tags: TagProps[];
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
