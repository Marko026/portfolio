import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center mt-10 md:mt-20 ">
      <div className="max-w-3xl text-center">
        <h1 className="h1-semibold mb-4">
          Hi! I'am&nbsp;
          <span className="gradient-text">Marko</span>
          ,a Next.js Developer base in Austria
        </h1>
        <p className="paragraph-regular text-white-800">
          Web developer creating top-notch digital experiences with passion and
          precision
        </p>
      </div>
      <Link
        href="/work"
        className="mt-9 px-10 py-4 gradient rounded-full hover:scale-110  duration-500">
        <div className="px-4 py-2 md:px-6 md:py-4 rounded-full flex items-center gap-2 bg-gradient-to-r from-[#0026FF] to-[#C1A4FF]">
          <p className="paragraph-normal ">See my work</p>
          <Image src="/icons/Vector.svg" width={10} height={10} alt="arrow" />
        </div>
      </Link>
      <Image
        src="/images/dev.png"
        width={850}
        height={567}
        priority
        className="object-cover"
        alt="dev"
      />
    </div>
  );
}
