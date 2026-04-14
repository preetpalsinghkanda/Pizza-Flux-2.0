import React, { useState } from "react";
import PizzaLogo from "/PizzaLogo.png";

const NavBar = () => {
  const [isNavBarOpen, setIsNavBar] = useState(false);
  return (
    <>
      <div className="bg-[#111110]   flex justify-center border-b-1 border-[#ffffff13]">
        <div className="navbar flex justify-around lg:justify-between items-center w-full py-2 max-w-6xl m-auto">
          <div className="flex items-center gap-2">
            <img src={PizzaLogo} alt="" className="h-15" />
            <span className="text-3xl text-[#ff5f2e]">PizzaFlux 2.0</span>
          </div>

          <div className=" flex-row items-center gap-4 hidden md:flex">
            <div className="cursor-pointer hover:bg-[#f6a823] px-2 py-1 rounded-lg flex items-center text-white hover:text-black ">
              <span className="material-symbols-outlined ">menu_book_2</span>
            </div>
            <div className="cursor-pointer hover:bg-[#f6a823] px-2 py-1 rounded-lg flex items-center text-white hover:text-black ">
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>
            <div className="cursor-pointer hover:bg-[#f6a823] px-2 py-1 rounded-lg flex items-center text-white hover:text-black gap-2 ">
              <span className="material-symbols-outlined ">person_edit</span>
              <span className=" text-lg ">Signup</span>
            </div>
          </div>

          <div
            onClick={() => setIsNavBar(!isNavBarOpen)}
            className=" items-center md:hidden flex "
          >
            {!isNavBarOpen ? (
              <span className="material-symbols-outlined text-white">
                dehaze
              </span>
            ) : (
              <span class="material-symbols-outlined text-white">close</span>
            )}
          </div>
        </div>
      </div>

      {isNavBarOpen && (
        <div className="small-navbar border md:hidden flex absolute right-0  flex-col gap-3 items-center px-2 py-2">
          <div className="text-white items-center flex bg-[#20201f] px-4 py-2 rounded-xl gap-2">
            Menu <span className="material-symbols-outlined ">menu_book_2</span>
          </div>
          <div className="text-white items-center flex bg-[#20201f] px-4 py-2 rounded-xl gap-2">
            {" "}
            Cart{" "}
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
          <div className="text-white items-center flex bg-[#20201f] px-4 py-2 rounded-xl gap-2">
            Signup{" "}
            <span className="material-symbols-outlined ">person_edit</span>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
