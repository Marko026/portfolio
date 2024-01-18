import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center mt-24 h-screen">
      <div className="max-w-3xl text-center">
        <h1 className="h1-semibold mb-4">
          Hi! I'am&nbsp;
          <span className="bg-gradient-to-r from-[#0026FF] to-[#C1A4FF] bg-clip-text text-transparent ">
            Marko
          </span>
          ,a Next.js Developer base in Austria
        </h1>
        <p className="paragraph-regular text-white-800">
          Web developer creating top-notch digital experiences with passion and
          precision
        </p>
      </div>
      <Link href="/work" className="mt-9 px-10 py-4 gradient rounded-full">
        <div className="flex items-center gap-2">
          <p className="paragraph-normal">See my work</p>
          <Image src="/icons/Vector.svg" width={10} height={10} alt="arrow" />
        </div>
      </Link>
      <Image
        src="/images/dev.png"
        width={850}
        height={567}
        className="object-cover"
        alt="dev"
      />
    </div>
  );
}
