import React from "react";
import Header from "../components/Header";
import Tech from "../components/Tech";

const Technology = () => {
  return (
    <div className="bg-mobileTech sm:bg-tabletTech md:bg-desktopTech bg-cover bg-center min-h-screen">
      <Header />
      <Tech />
    </div>
  );
};

export default Technology;
