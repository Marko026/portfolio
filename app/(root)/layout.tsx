import Footer from "@/components/Footer/page";
import React from "react";

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default SubLayout;
