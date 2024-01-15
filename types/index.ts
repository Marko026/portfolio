interface Params {
  slug: string;
}

export interface allProjects {
  params: Params;
  _id: string;
  title: string;
  currnetSlug: string;
  description: string;
  imageTitle: string;
  content: string;
  startDate: string;
  endDate: string;
  role: string;
}

export interface TechProps {
  _id: string;
  name: string;
  tags: string[];
  techImage: string;
}

export interface TagProps {
  _id: string;
  name: string;
}
