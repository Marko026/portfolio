import { SpotlightPreview } from "@/components/SpotlightPreview/page";
import { ImageTrailHero } from "@/components/MotivationText/page";
import Image from "next/image";
import Testimonials from "@/components/Testimonials/page";
import LinkMyWork from "@/components/SeemyWork/page";

export default async function Home() {
  console.log("only commit");

  return (
    <div className="mt-10 md:mt-32 relative ">
      <div className="absolute top-40 sm:top-1/4 -z-20">
        <ImageTrailHero />
      </div>

      <div className="max-w-4xl mx-auto text-center m-0 z-10">
        <SpotlightPreview />
        <LinkMyWork />
        <Image
          src="/images/dev.png"
          width={850}
          height={567}
          priority={true}
          className="object-cover h-full z-100 w-full mb-20"
          alt="dev"
        />
      </div>
      <Testimonials />
    </div>
  );
}
