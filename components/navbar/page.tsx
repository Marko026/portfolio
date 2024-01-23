"use client";
import Link from "next/link";
import { pages } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
type PageTypes = {
  name: string;
  path: string;
};

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="flex justify-center items-center ">
      <div className="w-[451px]  flex justify-center py-7 px-2 border  border-gray-700   rounded-full  bg-black-100 bg-opacity-20 gap-10 ">
        {pages.map((page: PageTypes) => (
          <Link
            key={page.path}
            href={page.path}
            className={`relative max-w-[268px]`}>
            <p
              className={` paragraph-regular ${
                path === page.path ? "text-white-900" : "text-white-800"
              }`}>
              {page.name}
            </p>

            <Image
              src="/public/icons/indicator.svg"
              width={8}
              height={8}
              alt="indicator"
              className={`absolute
              ${path === page.path ? "block" : "hidden"}
              bottom-[-17px] right-[50%] animate-pulse transform -translate-x-50% rounded-full`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
