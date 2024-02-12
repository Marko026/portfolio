import React from "react";
import Footer from "@/components/Footer/page";

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto">
      {children}
      <Footer />
    </div>
  );
};

export default SubLayout;
