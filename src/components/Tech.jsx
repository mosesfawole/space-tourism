import React, { useState } from "react";

import data from "../lib/data.json";
const Tech = () => {
  const [technologies] = useState(data.technology);
  const [value, setValue] = useState(0);
  const { name, images, description } = technologies[value];
  return (
    <div>
      <div className="flex justify-center items-center title font-barlow text-white gap-4 md:justify-start md:pl-[167px] sm:pl-0 md:mt-4  mb-8">
        <p className="font-bold tracking-[2.7px] opacity-[0.25] sm:text-[20px] sm:leading-6 md:text-[28px] md:leading-9">
          03
        </p>
        <p className="sm:text-[20px] sm:leading-6 md:text-[28px] md:leading-9  uppercase tracking-[2.7px] ">
          space launch 101
        </p>
      </div>
      <div className="md:flex md:flex-row md:items-">
        <div className="top flex flex-col  ">
          <div className="i">
            <img className="md:hidden" src={images.landscape} alt={name} />
            <img
              className="hidden md:flex w-full h-auto"
              src={images.portrait}
              alt={name}
            />
          </div>
        </div>
        <div className="bottom mt-9 md:flex justify-center items-center  md:gap-20 sm:gap-0 md:order-first  md:flex-[80%] md:mt-0   ">
          <div className="">
            <ul className="flex justify-center items-center gap-4 mb-4 md:flex-col md:gap-8">
              {technologies.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setValue(index)}
                    className={`font-bellefair text-base leading-4 text-white w-10 h-10 sm:w-[60px] sm:h-[60px] md:h-20 md:w-20 md:text-3xl sm:text-2xl sm:leading-7 rounded-full border border-[#2b2e36] 
                  ${index === value && "bg-white text-black"}
                        `}
                  >
                    {item.id}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="details flex flex-col justify-center items-center text-center md:text-left md:items-start  p-6 md:basis-[55%]  ">
            <div className="top mb-4">
              <p className="font-barlow text-sm text-[#D0D6F9] uppercase leading-[2.36px] sm:text-base sm:leading-5 md:text-base md:leading-5">
                the terminology...
              </p>
            </div>
            <div className="mb-4">
              <p className="font-bellefair text-2xl leading-7 uppercase text-white text-[40px] sm:leading-[46px] md:text-[56px] md:leading-[64px]">
                {name}
              </p>
            </div>
            <div className="">
              <p className="text-[15px] sm:text-base leading-6 text-[#D0D6F9] md:text-lg md:leading-8">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
