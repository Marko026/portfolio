import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="px-5 max-w-4xl mx-auto">
      <div className=" text-center mt-28">
        <h1 className="h1-semibold h-fit">
          Thanks for snapping a look. Let's get in touch!
        </h1>
      </div>
      <div className="flex justify-between gap-3 flex-wrap mx-auto py-20">
        <Link
          href="
          https://www.linkedin.com/in/morrent/"
          target="_blank"
          className="grow  sm:basis-2/5 lg:basis-1/5  bg-black-200 bg-opacity-20 backdrop-blur-xl flex items-center justify-center rounded-[8px] py-3 px-7 ">
          <Image
            src="/github.svg"
            width={20}
            height={20}
            alt="linkedin"
            className="inline-block ml-2 "
          />
          <span className="ml-3">Github</span>
        </Link>
        <Link
          href="
          /vector-1.svg"
          target="_blank"
          className="grow sm:basis-2/5 lg:basis-1/5 bg-black-200 bg-opacity-20  backdrop-blur-xl flex items-center justify-center rounded-[8px] py-3 px-7 ">
          <Image
            src="/x.svg"
            width={20}
            height={20}
            alt="instagram"
            className="inline-block ml-2"
          />
          <span className="ml-3">LinkedIn</span>
        </Link>
        <Link
          href="
          https://twitter.com/morrent_"
          target="_blank"
          className="grow sm:basis-2/5  lg:basis-1/5 bg-black-200 bg-opacity-20 backdrop-blur-xl flex items-center justify-center rounded-[8px] py-3 px-7  ">
          <Image
            src="/t.svg"
            width={20}
            height={20}
            alt="twitter"
            className="inline-block ml-2"
          />
          <span className="ml-3">Twitter</span>
        </Link>
        <Link
          href="
          https://www.facebook.com/morrent"
          target="_blank"
          className="grow sm:basis-2/5  lg:basis-1/5  bg-black-200 bg-opacity-20 backdrop-blur-xl	 flex items-center justify-center rounded-[8px] py-3 px-7 ">
          <Image
            src="/instagram.svg"
            width={20}
            height={20}
            alt="facebook"
            className="inline-block ml-2"
          />
          <span className="ml-3">Instagram</span>
        </Link>
        <Link
          className="grow basis-full mt-9 bg-black-200 bg-opacity-20 backdrop-blur-xl	 flex items-center justify-center rounded-[8px] py-3 px-7 md:basis-0"
          href="
          mailto:markectodorovic@gmail.com
        ">
          @markectodorovic@gmail.com
        </Link>
      </div>
    </section>
  );
};

export default Contact;
