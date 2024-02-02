import GradientShadowButton from "@/components/SeemyWork/page";
import { SpotlightPreview } from "@/components/SpotlightPreview/page";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center mt-10 md:mt-20 ">
      <div className="max-w-4xl text-center m-0">
        <SpotlightPreview />
        <GradientShadowButton />
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
