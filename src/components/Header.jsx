import React, { useEffect, useState } from "react";
import Logo from "../../public/assets/shared/logo.svg";
import Hamburger from "../../public/assets/shared/icon-hamburger.svg";
import Close from "../../public/assets/shared/icon-close.svg";
import { Link, useLocation } from "react-router-dom";
import navs from "../lib/navs";

const Header = () => {
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState(pathname);

  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname]);

  const openMenu = () => {
    setIsMenu(true);
  };

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <div className="header">
      {/* mobile header */}
      <div className=" flex justify-between items-center p-6 md:p-0 md:pt-10  ">
        <div className="left md: md:px-6 cursor-pointer">
          <Link to="/home">
            <img loading="lazy" src={Logo} alt="logo" />
          </Link>
        </div>
        {/* <div className="left hidden md:flex md:px-6 ">
          <img loading="lazy" src={Logo} alt="logo" />
        </div> */}
        <hr className="hidden md:block absolute left-[167px] z-10 bg-white opacity-[0.25] mix-blend-normal w-[473px]" />
        <div className="right">
          <div className="img md:hidden" onClick={openMenu}>
            <img loading="lazy" src={Hamburger} alt="hamburger" />
          </div>
          <div className="lists hidden sm:hidden right-0 bg-header-bg backdrop-blur-2xl md:flex md:unset">
            <ul className="flex uppercase gap-12 p-6 h-[96px]  w-[830px] sm:w-full text-white text-base font-barlow pr-[125px] pl-[123px] ">
              {navs.map((item, index) => (
                <li
                  onClick={() => setIsMenu(false)}
                  className={
                    currentPage === `/${item}`
                      ? `border-b-2 pb-[70px] `
                      : "flex gap-3 hover:border-opacity-[.5] hover:border-b-2 hover:pb-[70px] hover:border-white  "
                  }
                  key={index}
                >
                  {" "}
                  <Link
                    className="flex gap-3  mt-3"
                    // onChange={() => setCurrentPage(`${item}`)}
                    to={`/${item}`}
                  >
                    <span className="font-bold"> 0{index}</span>
                    <p>{item}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* mobile */}
          <div
            className={
              isMenu
                ? "lists  pt-8 px-7 fixed top-0 right-0 w-[70%] z-10 h-full  bg-header-bg backdrop-blur-2xl md:hidden"
                : "hidden"
            }
          >
            <span className="flex justify-end" onClick={closeMenu}>
              <img loading="lazy" src={Close} alt="close" />
            </span>
            <ul className="flex flex-col uppercase gap-8 mt-16   text-white text-base font-barlow   ">
              {navs.map((item, index) => (
                <li
                  onClick={closeMenu}
                  className={
                    currentPage === `${item}`
                      ? ``
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
