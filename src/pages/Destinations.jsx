import React from "react";
import Destination from "../components/Destination";
import Header from "../components/Header";

const Destinations = () => {
  return (
    <div className="bg-mobileDestination sm:bg-tabletDestination md:bg-desktopDestination">
      <Header />
      <Destination />
      //{" "}
    </div>
  );
};

export default Destinations;
