import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between flex-col sm:flex-row items-center text-xs md:text-sm pb-10">
      <p className="text-white-800">
        &copy; 2024 Marko Todorovic created with ❤️
      </p>
      <Link href="mailto:markectodorovic@gmial.com" className="text-white-800">
        markectodorovic@gmial.com
      </Link>
    </footer>
  );
};

export default Footer;
