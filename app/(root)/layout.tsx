import React from 'react';
import Footer from '@/components/Footer/page';

const SubLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl px-3 mx-auto">
      {children}
      <Footer />
    </div>
  );
};

export default SubLayout;
