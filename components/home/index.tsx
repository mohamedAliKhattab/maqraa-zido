import React from "react";
import HomeLayout from "@/components/layouts/HomeLayout";
import Header from "@/components/home/Header";
import WhatWeTeach from "@/components/home/WhatTeach";
import HowWeTeach from "@/components/home/HowTeach";
import OurSecret from "@/components/home/OurSecret";
import TeachChildren from "@/components/home/TeachChildren";
import OurClasses from "@/components/home/OurClasses";
import Teachers from "@/components/home/Teachers";
import Achievements from "@/components/home/Achievements";

const HomePage = () => {
  return (
    <div>
      <HomeLayout>
        <Header />
        <WhatWeTeach />
        <HowWeTeach />
        <OurSecret />
        <TeachChildren />
        <OurClasses />
        <Teachers />
        <Achievements />
      </HomeLayout>
    </div>
  );
};
export default HomePage;
