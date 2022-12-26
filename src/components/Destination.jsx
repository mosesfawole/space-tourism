import axios from "axios";
import React, { useEffect, useState } from "react";
import data from "../lib/data.json";
const Destination = () => {
  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];
  return <></>;
};

export default Destination;
