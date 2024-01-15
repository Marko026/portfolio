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
