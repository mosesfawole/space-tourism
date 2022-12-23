import React, { useState } from "react";
import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";
import navs from "../lib/navs";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("home");

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
            <ul className="flex uppercase gap-12 p-6 h-[96px] text-white text-base font-barlow pr-[125px] pl-[123px] ">
              {navs.map((item, index) => (
                <li
                  className={
                    currentPage === `${item}`
                      ? `border-b-2 pb-[70px]`
                      : "flex gap-3 cursor-pointer "
                  }
                  key={index}
                >
                  {" "}
                  <Link
                    className="flex gap-3"
                    onClick={() => setCurrentPage(`${item}`)}
                    to={`/${item}`}
                  >
                    <span className="font-bold"> 0{index}</span>
                    <p>{item}</p>
                  </Link>
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
