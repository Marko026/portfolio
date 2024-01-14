import Link from "next/link";
import React from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <Link href="/">Mt</Link>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
