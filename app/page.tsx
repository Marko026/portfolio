import { SpotlightPreview } from "@/components/SpotlightPreview/page";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center mt-10 md:mt-20 ">
      <div className="max-w-4xl text-center">
        <SpotlightPreview />
        <Link
          href="/work"
          className="mt-9 px-10 inline-block py-4 gradient rounded-full hover:scale-110 duration-500">
          <div className="px-4 py-2 md:px-6 md:py-4 rounded-full flex items-center gap-2 bg-gradient-to-r from-[#0026FF] to-[#C1A4FF]">
            <p className="paragraph-regular text-white-900">See my work</p>
            <Image src="/icons/Vector.svg" width={10} height={10} alt="arrow" />
          </div>
        </Link>
        <Image
          src="/images/dev.png"
          width={850}
          height={567}
          priority={true}
          className="object-cover h-full w-full"
          alt="dev"
        />
      </div>
    </div>
  );
}
