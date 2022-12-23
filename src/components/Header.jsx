import React from "react";
import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";

import navs from "../lib/navs";
const Header = () => {
  return (
    <div>
      {/* mobile header */}
      <div className=" flex justify-between items-center p-6 md:p-0 md:pt-10  md:pb-10">
        <div className="left md:px-6">
          <img src={Logo} alt="logo" />
        </div>
        <hr className="hidden md:block absolute left-[167px] z-10 bg-white opacity-[0.25] mix-blend-normal w-[473px]" />
        <div className="right">
          <div className="img md:hidden">
            <img src={Hamburger} alt="hamburger" />
          </div>
          <div className="lists bg-header-bg backdrop-blur-2xl hidden md:flex">
            <ul className="flex uppercase gap-12 p-6 text-white text-base font-barlow pr-[125px] pl-[123px] ">
              {navs.map((item, index) => (
                <li className="flex gap-3 cursor-pointer" key={index}>
                  {" "}
                  <span className="font-bold"> 0{index}</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
