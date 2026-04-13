import React from "react";
import Pizza from "/PizzaLogo.png";

const Hero = () => {
  return (
    <div className="border hero w-max m-auto flex items-center">
      <div className="flex items-center flex-col gap-6">
        <img src={Pizza} alt="" className="h-60" />
        <h1 className="text-6xl font-[800]">
          PizzaFlux 2.0 , <span className="text-[red] ">Your Way</span>
        </h1>
        <p className="w-md text-center text-lg ">
          Craft your perfect pizza. Choose size, crust, toppings & more which is
          all powered by Redux
        </p>
        <div className="flex gap-3">
          <button className="flex items-center border px-6 py-3 rounded-xl text-2xl bg-[#f24a0d] text-white">
            Order Now{" "}
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
          <button className="border rounded-xl px-6 py-3 text-2xl">
            Join Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
