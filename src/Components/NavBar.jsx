import React from "react";
import PizzaLogo from "/PizzaLogo.png";

const NavBar = () => {
  return (
    <div className="bg-[#12100e] flex justify-center">
    <div className="navbar border  flex justify-between items-center w-full py-2 max-w-6xl m-auto">
      <div className="flex items-center gap-2">
        <img src={PizzaLogo} alt="" className="h-15" />
        <span className="text-3xl text-[#ff5f2e]">PizzaFlux 2.0</span>
      </div>
      <div  className="flex flex-row items-center gap-4">
        <div className="cursor-pointer hover:bg-[#f6a823] px-2 py-1 rounded-lg flex items-center text-white hover:text-black ">
          <span className="material-symbols-outlined ">
            menu_book_2
          </span>
        </div>
         <div className="cursor-pointer hover:bg-[#f6a823] px-2 py-1 rounded-lg flex items-center text-white hover:text-black "><span className="material-symbols-outlined">
shopping_cart
</span></div>
         <div className="cursor-pointer hover:bg-[#f6a823] px-2 py-1 rounded-lg flex items-center text-white hover:text-black gap-2 ">
          <span className="material-symbols-outlined ">
            person_edit
          </span>
          <span className=" text-lg ">Signup</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
