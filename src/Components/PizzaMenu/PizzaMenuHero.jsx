import React from "react";
import mainPizza from "/mainPizza.webp";

const PizzaMenuHero = () => {
  return (
    <div className="flex border border-white   m-auto  w-max pizza-main-hero  justify-between ">
      <div className="relative left-30">
        
  
          <div className="border border-white flex  flex-col  ">
             <p className="text-[#f8b636] font-[800]  absolute top-20  ">FRESH FROM THE FIRE OVEN</p>
            <h4 className="text-white font-[800] text-[120px] absolute top-18">
              FIRE
            </h4>
            <h4 className="text-[#f17e24] font-[800] text-[120px] absolute top-46">
              MEETS
            </h4>
            <h4 className="text-[#d14929]  font-[800] text-[120px] absolute top-76">
              FLAVOUR
            </h4>


          </div>
     
        
            <p className="text-white opacity-0">
          Handcrafted pizzas with bold flavors, baked to perfection in our
          signature fire crust ovens. Taste the heat. Feel the difference.
        </p>
        <div></div>
      </div>

      <div className="w-[600px] border-white border-2 relative right-30">
        <span className="bg-[#ffb404] text-black font-[800] px-6 py-2 rounded-2xl absolute right-10 top-20 z-2">#1 BestSeller</span>
        <img src={mainPizza} alt=""  className="w-full main-pizza" />
      </div>
    </div>
  );
};

export default PizzaMenuHero;
