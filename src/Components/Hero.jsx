import React from "react";
import Pizza from "/PizzaLogo.png";

const Hero = () => {
  return (
    <div className=" hero w-max m-auto flex items-center">
      <div className="flex items-center flex-col gap-6">
        <img src={Pizza} alt="" className="h-60" />
        <h1 className="text-6xl font-[800] text-white">
          PizzaFlux 2.0 , <span className="text-[red] ">Your Way</span>
        </h1>
        <p className="w-md text-center text-lg text-[#ffffffb0] ">
          Craft your perfect pizza. Choose size, crust, toppings & more which is
          all powered by Redux
        </p>
        <div className="flex gap-3">
          <button className="flex items-center cursor-pointer px-6 py-3 rounded-xl text-2xl bg-[#f24a0d] text-white ">
            Order Now{" "}
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
          <button className="border-0 cursor-pointer rounded-xl px-6 py-3 text-2xl bg-[#1a1a1a] text-white " >
            Join Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
