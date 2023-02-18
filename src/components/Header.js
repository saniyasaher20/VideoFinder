import React from "react";
import { RxHamburgerMenu, RxMagnifyingGlass, RxPerson } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import YoutubeLogo from "../assets/img/YouTube-Logo.png";

const Header = () => {
  const dispatch = useDispatch();

  // Handle menu toggle function
  const handleToggleMenu = () => {
    // dispatch an action
    dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col justify-between items-center py-2" id="header">

      <span className="flex items-center gap-4 text-2xl col-span-2">
        <span className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
          onClick={() => handleToggleMenu()}>
          <RxHamburgerMenu />
        </span>
        <img className="" src={YoutubeLogo} alt="Youtube Logo" width={90} />
      </span>

      <span className="flex justify-center col-span-6">
        <input
          className="rounded-l-full w-2/4 border border-gray-300 shadow-inner px-5 py-2 focus-visible:border-blue-400 focus-visible:outline-0"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <button className="border-gray-300 rounded-r-full text-xl bg-gray-100 px-5 hover:bg-gray-200">
          <RxMagnifyingGlass />
        </button>
      </span>

      <span className="text-2xl ml-auto col-span-3">
        <RxPerson />
      </span>
    </div>
  );
};

export default Header;
