import Image from "next/image";
import Link from "next/link";

type Props = {
  nextProject: {
    _id: string;
    title: string;
    slug: string;
  };
};

const NextStudyButton = ({ nextProject }: Props) => {
  return (
    <Link href={`/work/${nextProject.slug}`} className="cursor-pointer">
      <div className="flex flex-col-reverse sm:flex-row items-end md:justify-end mb-2  sm:items-center gap-2">
        <p className="text-sm sm:text-2xl font-bold text-white-900">
          Next Study
        </p>
        <Image
          src="/icons/arrow-right.svg"
          alt="hero"
          width={30}
          height={30}
          priority={true}
        />
      </div>
      <p className="text-white-800 text-xs sm:text-sm text-right capitalize">
        {nextProject.slug}
      </p>
    </Link>
  );
};

export default NextStudyButton;
