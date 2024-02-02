import Image from "next/image";
import Link from "next/link";

const GradientShadowButton = () => {
  return (
    <div className="group sm:mt-9 mx-auto relative w-fit transition-transform duration-300 active:scale-95">
      <Link
        href="/work"
        className="relative z-10 block rounded-full bg-gradient-to-r from-[#0026FF] to-[#C1A4FF] p-0.5 duration-300 group-hover:scale-110">
        <div className="px-4 py-2 md:px-6 md:py-4 rounded-full flex items-center gap-2 bg-gradient-to-r from-[#0026FF] to-[#C1A4FF]">
          <p className="paragraph-regular text-white-900">See my work</p>
          <Image src="/icons/Vector.svg" width={10} height={10} alt="arrow" />
        </div>
      </Link>
      <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-full bg-gradient-to-r from-[#0026FF] to-[#C1A4FF] opacity-30 blur-lg transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
    </div>
  );
};
export default GradientShadowButton;
