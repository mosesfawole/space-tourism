import React, { useState } from "react";
import data from "../lib/data.json";
const Crew = () => {
  const [crews] = useState(data.crew);
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = crews[value];
  return <div></div>;
};

export default Crew;
