import Image from "next/image";
import Link from "next/link";

type Props = {
  previousProject: {
    _id: string;
    title: string;
    slug: string;
  };
};

const PreviousButton = ({ previousProject }: Props) => {
  return (
    <Link href={`/work/${previousProject.slug}`} className="cursor-pointer">
      <div className="flex flex-col sm:flex-row items-start mb-2 sm:items-center gap-2">
        <Image
          src="/icons/arrow-left.svg"
          alt="hero"
          width={30}
          height={30}
          priority={true}
        />
        <p className="text-sm sm:text-2xl font-bold text-white-900">
          Previous Study
        </p>
      </div>
      <p className="text-white-800 capitalize text-left text-xs  sm:text-sm">
        {previousProject.slug}
      </p>
    </Link>
  );
};

export default PreviousButton;
