import Image from "next/image";
import Link from "next/link";
import { links } from "@/constants";
import Form from "@/components/Form/page";
const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className=" text-center mt-10 md:mt-28">
        <h1 className="h1-semibold text-white-900">
          Thanks for snapping a look. Let's get in touch!
        </h1>
      </div>
      <Form />
      <div className="flex justify-between gap-3 flex-wrap mx-auto py-20 mb-[200px]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            className="grow sm:basis-2/5 lg:basis-1/5 shadow-md hover:shadow-glow duration-200 hover:scale-105 bg-black-200 bg-opacity-20 backdrop-blur-xl flex items-center justify-center rounded-[8px] py-3 px-7 ">
            <Image
              src={link.src}
              width={20}
              height={20}
              alt={link.alt}
              priority={true}
              className="inline-block ml-2 "
            />
            <span className="ml-3 text-white-900">{link.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
