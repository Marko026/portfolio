import { getProject } from "@/sanity/utils/utilsSantiy";
import { allProjects } from "@/types";

const Project = async ({ params }: allProjects) => {
  const { slug } = params;
  const project = await getProject(slug);
  console.log(project);
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default Project;
