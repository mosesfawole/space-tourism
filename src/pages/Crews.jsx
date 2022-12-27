import React from "react";
import Crew from "../components/Crew";
import Header from "../components/Header";

const Crews = () => {
  return (
    <div className="bg-mobileCrew sm:bg-tabletCrew md:bg-desktopCrew  bg-cover bg-center min-h-screen">
      <Header />
      <Crew />
    </div>
  );
};

export default Crews;
