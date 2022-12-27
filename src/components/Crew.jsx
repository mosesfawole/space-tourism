import React, { useState } from "react";
import data from "../lib/data.json";
const Crew = () => {
  const [crews] = useState(data.crew);
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = crews[value];
  return (
    <div>
      <section>
        <div className="flex flex-col gap-8 ">
          <div className="top flex flex-col justify-center items-center gap-8">
            <div className="title font-barlow text-white flex gap-4 ">
              <p className="font-bold tracking-[2.7px] opacity-[0.25]">02</p>
              <p className="sm:text-[20px] sm:leading-6  uppercase tracking-[2.7px]">
                Meet your crew
              </p>
            </div>
            <div className="">
              <img className="w-1/2 mx-auto" src={images.webp} alt={name} />
              <div className="h-[1px] w-4/5 mx-auto bg-[#383B4B]"></div>
            </div>
          </div>

          <div className="bottom">
            <ul className="flex justify-center items-center gap-4">
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
            <div className="details text-center mt-8">
              <div className="role">
                <p className="font-bellefair  text-base leading-4 opacity-[0.5]">
                  {role}
                </p>
              </div>
              <div className="name mt-2 mb-4">
                <p className="text-2xl leading-7 text-white ">{name}</p>
              </div>
              <div className="bio">
                <p className="font-barlow text-[15px] leading-6 text-[#D0D6F9]">
                  {" "}
                  {bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crew;
