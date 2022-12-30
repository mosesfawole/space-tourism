import React, { useState } from "react";

import data from "../lib/data.json";
const Tech = () => {
  const [technologies] = useState(data.technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = technologies[value];
  return (
    <div>
      <div className="">
        <div className="top flex flex-col gap-8">
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
        <div className="bottom mt-9">
          <ul className="flex justify-center items-center gap-4">
            {technologies.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setValue(index)}
                  className={`font-bellefair text-base leading-4 text-white w-10 h-10 rounded-full border border-[#2b2e36] 
                  ${index === value && "bg-white text-black"}
                        `}
                >
                  {item.id}
                </button>
              </li>
            ))}
          </ul>
          <div className="details">
            <div className="top">
              <p>the technologies ...</p>
            </div>
            <div className="">{name}</div>
            <div className="">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
