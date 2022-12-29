import React, { useState } from "react";
import data from "../lib/data.json";
const Crew = () => {
  const [crews] = useState(data.crew);
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = crews[value];
  return (
    <div>
      <section>
        <div className="flex flex-col md:flex-row items-center md:gap-0  gap-8 ">
          <div className="top flex flex-col justify-center items-center gap-8 relative order-last">
            <div className="md:hidden title font-barlow text-white flex gap-4 ">
              <p className="font-bold tracking-[2.7px] opacity-[0.25]">02</p>
              <p className="sm:text-[20px] sm:leading-6  uppercase tracking-[2.7px] ">
                Meet your crew
              </p>
            </div>
            <div className="">
              <img
                className=" h-[227px] mx-auto md:w-full md:h-auto "
                src={images.webp}
                alt={name}
              />
            </div>
            <div className="md:hidden absolute bottom-0 h-[1px] w-[327px] mx-auto bg-[#383B4B]"></div>
          </div>

          <div className="bottom flex flex-col ">
            <div className="hidden md:flex title font-barlow text-white gap-4 ">
              <p className="font-bold tracking-[2.7px] opacity-[0.25]">02</p>
              <p className="sm:text-[20px] sm:leading-6  uppercase tracking-[2.7px] ">
                Meet your crew
              </p>
            </div>
            <ul className="md:hidden flex justify-center items-center gap-4">
              {crews.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setValue(index)}
                    className={` bg-white w-3 h-3 rounded-full opacity-[.17] 
                    ${index === value && "opacity-100"}
                          `}
                  ></button>
                </li>
              ))}
            </ul>
            <div className="details text-center mt-8 px-6 md:text-left">
              <div className="role">
                <p className="font-bellefair text-white  text-base uppercase leading-4 md:text-3xl opacity-[0.5]">
                  {role}
                </p>
              </div>
              <div className="name mt-2 mb-4">
                <p className="font-bellefair text-2xl leading-7 text-white uppercase md:text-[56px] md:leading-[64px]    ">
                  {name}
                </p>
              </div>
              <div className="bio">
                <p className="font-barlow text-[15px] leading-6 text-[#D0D6F9] md:text-[18px] md:leading-8">
                  {" "}
                  {bio}
                </p>
              </div>
              <ul className="hidden md:flex items-center gap-4">
                {crews.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setValue(index)}
                      className={` bg-white w-3 h-3 rounded-full opacity-[.17] 
                    ${index === value && "opacity-100"}
                          `}
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crew;
