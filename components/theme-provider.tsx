"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  localStorage.setItem("theme", `${"dark" === "dark" ? "dark" : "light"}`);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
