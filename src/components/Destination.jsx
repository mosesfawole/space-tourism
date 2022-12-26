import axios from "axios";
import React, { useEffect, useState } from "react";
import data from "../lib/data.json";
const Destination = () => {
  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];
  return (
    <>
      <section>
        <div className="md:flex items-center justify-center gap-40">
          <div className="top flex flex-col gap-8 justify-center items-center md:items-start  ">
            <div className="font-barlow text-white flex items-center gap-4  ">
              <p className="font-bold tracking-[2.7px] opacity-[0.25]">01</p>
              <p className=" text-base uppercase tracking-[2.7px]">
                Pick your destination
              </p>
            </div>
            <img className="w-1/2 md:w-auto" src={images.webp} alt={name} />
          </div>

          <div className="details mt-7">
            <ul className="flex justify-center items-center gap-7">
              {planets.map((item, index) => (
                <li
                  className="font-barlow text-sm text-[#D0D6F9] tracking-[2.4px]"
                  key={index}
                >
                  <button
                    onClick={() => setValue(index)}
                    className={` tracking-wider text-[#D0D6F9] uppercase pb-2 border-b-2  border-transparent ${
                      index === value && "border-b-2 border-white"
                    } `}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="text-center p-4">
              <h2 className="font-bellefair font-normal text-white uppercase  mt-5 text-[56px] leading-[64px] ">
                {name}
              </h2>
              <p className=" px-6 font-barlow text-[15px] leading-[25px] text-[#D0D6F9]  ">
                {description}
              </p>
            </div>
            <hr className="bg-[#383B4B]  mt-8 mb-8 " />

            <ul className="text-center flex flex-col gap-8 p-4">
              <li className="text-[#D0D6F9] font-barlow text-sm uppercase tracking-wider">
                Avg. Distance{" "}
                <p className="font-bellefair mt-3 text-[28px] leading-8 text-white">
                  {distance}
                </p>
              </li>
              <li className="text-[#D0D6F9] font-barlow text-sm uppercase tracking-wider">
                Est. travel time{" "}
                <p className="font-bellefair mt-3 text-[28px] leading-8 text-white">
                  {travel}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
