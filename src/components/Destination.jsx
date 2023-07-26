import React, { useState } from "react";
import data from "../lib/data.js";
const Destination = () => {
  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];
  return (
    <>
      <section>
        <div className="flex flex-col md:grid md:grid-cols-2   md:mt-20      ">
          <div className="top flex flex-col gap-8 items-center md:items-start ">
            <div className="font-barlow  text-white flex  gap-4  md:pl-16">
              <p className="font-bold tracking-[2.7px] opacity-[0.25]">01</p>
              <p className="text-base sm:text-[20px] sm:leading-6  uppercase tracking-[2.7px] ">
                Pick your destination
              </p>
            </div>
            <img
        
              className="w-1/2 sm:w-1/2 md:w-1/3  md:mt-7 mx-auto"
              src={images.webp}
              alt={name}
            />
          </div>

          <div className="details mt-7 md:w-4/5">
            <ul className="flex justify-center items-center gap-7 md:justify-start  ">
              {planets.map((item, index) => (
                <li
                  className="font-barlow text-sm sm:text-base sm:leading-5 text-[#D0D6F9] tracking-[2.4px]"
                  key={index}
                >
                  <button
                    onClick={() => setValue(index)}
                    className={` tracking-wider text-[#D0D6F9] uppercase pb-2 border-b-2 hover:border-opacity-50 hover:border-white border-transparent ${
                      index === value && "border-b-2 border-white "
                    } `}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="text-center p-4 md:p-0 md:text-start">
              <h2 className="font-bellefair font-normal text-white uppercase  mt-5 text-[56px]  leading-[64px] sm:text-[80px] sm:leading-[92px] md:text-[100px] md:leading-[114px] ">
                {name}
              </h2>
              <p className=" px-6 md:px-0 font-barlow text-[15px] leading-[25px] text-[#D0D6F9] sm:text-base sm:leading-7 md:text-xl md:leading-8 ">
                {description}
              </p>
            </div>
            <div className="mt-3 bg-[#383B4B] h-[1px] w-[80%] mx-auto md:w-full "></div>

            <ul className="text-center flex flex-col sm:flex-row md:text-start md:flex-row justify-center md:justify-start sm:p-0 items-center   gap-8 p-4 mt-8">
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
