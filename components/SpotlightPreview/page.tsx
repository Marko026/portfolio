import React from "react";
import { cn } from "@/utils/cn";
import Spotlight from "@/components/ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="mt-[90px]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h1 className="h1-semibold mb-4 text-white-900">
        Hi! I'am&nbsp;
        <span className="gradient-text text-white-900">Marko</span>
        ,a Next.js Developer base in Austria
      </h1>
      <p className="paragraph-regular text-white-800">
        Web developer creating top-notch digital experiences with passion and
        precision
      </p>
    </div>
  );
}
