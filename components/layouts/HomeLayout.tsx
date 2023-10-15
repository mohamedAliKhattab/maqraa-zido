import React, { ReactNode } from "react";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

type Props = {
  children: ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default HomeLayout;
