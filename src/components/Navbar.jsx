import React from "react";
import { NavLink } from "react-router-dom";
import { BiNews } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  let Links = [
    { name: "Trending India", linkto: "/" },
    { name: "Top News", linkto: "/topnews" },
    { name: "Asia", linkto: "/asia" },
    { name: "Europe", linkto: "/europe" },
  ];
  const [open, setOpen] = useState(false);
  const [hideMenuOnClick, sethideMenuOnClick] = useState(true);

  return (
    <nav className="sticky top-0">
      <div className="shadow-md w-full left-0">
        <div className="md:flex items-center justify-between relative bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800 gap-3"
          >
            <BiNews />
            <p>NewsWave</p>
          </div>

          <div
            onClick={() => sethideMenuOnClick(!hideMenuOnClick)}
            className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
          >
            {open ? <RxCross1 /> : <GiHamburgerMenu />}
          </div>

          <ul
            className={`md:flex shadow-md md:shadow-none font-semibold md:items-center md:pb-0 top-0 pb-5 pt-5 md:pt-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-[50px] " : "top-[-490px]"
            } ${!hideMenuOnClick ? "top-[50px]" : "top-[-490px]"}`}
            id="menu"
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  onClick={() => sethideMenuOnClick(!hideMenuOnClick)}
                  to={link.linkto}
                  className={`hover:text-slate-700`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
