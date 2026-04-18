import React from "react";
import Pizza from "/PizzaLogo.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className=" hero m:w-max  m-auto flex items-center">
      <div className="flex items-center flex-col gap-6 min-w">
        <img src={Pizza} alt="" className="lg:h-60 md:h-50 h-40" />
        <h1 className="lg:text-6xl md:text-5xl text-3xl font-[800] text-white">
          PizzaFlux 2.0 , <span className="text-[red] ">Your Way</span>
        </h1>
        <p className="max-w-md sm:max-w-lg md:max-w-xl text-center text-sm sm:text-base md:text-lg text-white/70 px-2 sm:px-4 md:px-0">
          Craft your perfect pizza. Choose size, crust, toppings & more which is
          all powered by Redux
        </p>
        <div className="flex flex-col md:flex-row gap-3">
          <button onClick={()=>navigate("/menu")} className="flex items-center cursor-pointer  hover:scale-110  transition duration-300 px-6 py-3 rounded-xl md:text-2xl text-lg bg-[#f24a0d] text-white ">
            Order Now{" "}
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
          <button onClick={()=>navigate("/signup")} className="border-0 cursor-pointer rounded-xl transition duration-300 hover:scale-110 px-6 py-3 md:text-2xl text-lg bg-[#1a1a1a] text-white ">
            Join Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
