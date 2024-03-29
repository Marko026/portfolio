import Image from "next/image";
import Link from "next/link";
import { links } from "@/constants";
import Form from "@/components/Form/page";
import type { Metadata } from "next";
import { MotionDiv } from "@/components/MotionDiv";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's get in touch!",
};

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.15 }}
        className=" text-center mt-10 md:mt-28">
        <h1 className="h1-semibold text-white-900 my-12 md:mb-16">
          Thanks for snapping a look. Let's get in touch!
        </h1>
      </MotionDiv>
      <Form />
      <div className="flex justify-between shimmer gap-3 overflow-hidden flex-wrap mx-auto px-1 py-10 md:py-20 mb-[200px]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            className="grow basis-2/5 lg:basis-1/5 duration-500 hover:scale-105 bg-black-200 bg-opacity-70 backdrop-blur-xl flex items-center justify-center rounded-[8px] py-3 px-7 ">
            <Image
              src={link.src}
              width={20}
              height={20}
              alt={link.alt}
              priority={true}
              className="inline-block ml-2"
            />
            <span className="ml-3 text-white-900">{link.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
