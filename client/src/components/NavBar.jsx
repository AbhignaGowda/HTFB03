import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for routing

import logo from "../../images/logo.png";
import logo2 from "../../images/logo2.png";

const NavBarItem = ({ title, classprops, to }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    <Link to={to}>{title}</Link> {/* Use Link component for navigation */}
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 fixed">
     <div className="md:flex-[0.65] flex-start items-center">
  <img src={logo2} alt="logo" className=" w-56 cursor-pointer" />
</div>

      <ul className="text-white font-thin text-lg md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", "About", "Contact", "Upload"].map((item, index) => (
          <NavBarItem  key={item + index} title={item} to={`/${item.toLowerCase()}`} /> 
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          <Link to="/login">Login</Link> {/* Example login link */}
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Home", "About", "Contact", "Upload"].map((item, index) => (
  <NavBarItem  key={item + index} title={item} to={`/${item.toLowerCase()}`} />
))}

          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



