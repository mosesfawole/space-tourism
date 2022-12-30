import React, { useState } from "react";

import data from "../lib/data.json";
const Tech = () => {
  const [technologies] = useState(data.technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = technologies[value];
  return (
    <div>
      <div className="">
        <div className="top">
          <div className="flex justify-center items-center title font-barlow text-white gap-4 md:pl-8 ">
            <p className="font-bold tracking-[2.7px] opacity-[0.25]">03</p>
            <p className="sm:text-[20px] sm:leading-6  uppercase tracking-[2.7px] ">
              space launch 101
            </p>
          </div>
          <div className="i">
            <img className="md:hidden" src={images.landscape} alt={name} />
            <img className="hidden md:flex" src={images.portrait} alt={name} />
          </div>
        </div>
        <div className="bottom">
          <ul>
            {technologies.map((item, index) => (
              <li key={index}>
                <button className="text-white">{index}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tech;
