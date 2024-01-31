"use client";
import { pages } from "@/constants";

import { FloatingNav } from "../ui/floating-navbar";

const Navbar = () => {
  return <FloatingNav navItems={pages} />;
};

export default Navbar;
