import Tags from "@/components/Tags/page";
import Technologies from "@/components/Technologies/page";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/sanity";
import { getProjects } from "@/sanity/utils/utilsSanity";
import { allProjects } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

export default async function Home() {
  const allProjects = await getProjects();

  return (
    <main>
      <Technologies />

      <div className="grid gird-cols-1 md:grid-cols-2 gap-5 my-20 ">
        {allProjects.map((project: allProjects) => (
          <Link href={`projects/${project.currnetSlug}`} key={project._id}>
            <Card>
              <CardHeader>
                <Image
                  src={urlFor(project.imageTitle).url()}
                  alt={project.title}
                  width={300}
                  height={200}
                  priority={true}
                  className="object-cover w-full h-full rounded-lg mb-3"
                />
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-4 text-pretty">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter>
                <p className="">{project.role}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <Tags />
    </main>
  );
}
