"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { pages } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

type PageTypes = {
  name: string;
  path: string;
};

const Navbar = () => {
  const [isActive, setIsActive] = useState("/");
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <nav className="flex justify-center items-center pt-16">
      <div className="mr-20">
        <div className="w-[451px]  flex justify-center py-7 px-2 border  border-gray-700   rounded-full  bg-black-100 gap-10 ">
          {pages.map((page: PageTypes) => (
            <Link
              key={page.path}
              href={page.path}
              onClick={() => setIsActive(page.path)}
              className={`relative max-w-[268px]`}>
              <p
                className={` paragraph-regular ${
                  isActive === page.path
                    ? "dark:text-white-900"
                    : "dark:text-white-800"
                }`}>
                {page.name}
              </p>

              <Image
                src="/public/icons/indicator.svg"
                width={8}
                height={8}
                alt="indicator"
                className={`absolute
              ${isActive === page.path ? "block" : "hidden"}
              bottom-[-17px] right-[50%] animate-pulse transform -translate-x-50% rounded-full`}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
