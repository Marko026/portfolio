import Image from "next/image";
import Link from "next/link";

const LinkMyWork = () => {
  return (
    <div className="group sm:mt-9 mx-auto relative w-fit transition-transform duration-300 active:scale-95">
      <Link
        href="/work"
        className=" px-2 md:px-4  rounded-2xl flex items-center gap-2 relative z-0 overflow-hidden border-gray-700 border 
        bg-transparent  font-semibold
        uppercase text-violet-300 transition-all duration-500
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-gradient-to-r from-[#0026FF] to-[#C1A4FF]
        before:transition-transform before:duration-1000
        before:content-[''] hover:scale-105
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95">
        <div className="px-4 py-2 md:px-6 flex gap-2 md:py-4 rounded-full">
          <p className="paragraph-regular text-white-900">See my work</p>
          <Image src="/icons/Vector.svg" width={12} height={12} alt="arrow" />
        </div>
      </Link>
    </div>
  );
};
export default LinkMyWork;
