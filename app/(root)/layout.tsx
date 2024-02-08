import Footer from "@/components/Footer/page";
import React from "react";

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto">
      {children}
      <Footer />
    </div>
  );
};

export default SubLayout;
