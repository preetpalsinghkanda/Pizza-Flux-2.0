import React from "react";

import chickenPizza from "/chicken.png";
import pepperoniPizza from "/peporoni.png";
import chickenNewPizza from "/chickennew.png";

const PizzaMenu = () => {
  return (
    <div className=" text-white m-auto max-w-6xl pizza-main flex flex-col gap-2">
      <div className="relative top-12">
        <h3 className="text-7xl">
          Our Signature <span className="text-[#ff2600]">Pizzas</span>
        </h3>
        <p className="text-xl text-[#ADABAA]">
          Hot. Fresh. Irresistible. Each slice is a masterpiece crafted in our
          wood fired hearth at 450°C.
        </p>
      </div>

      <div className="flex gap-6 ">
        <div className=" flex flex-col items-center ">
          <img src={chickenPizza} alt="" className="h-60 relative top-30" />
          <div className=" pt-35 px-6 rounded-4xl pb-6 gap-6 flex flex-col bg-[#131313]">
            <div className="flex flex-col gap-3">
              <h5 className="text-3xl font-extrabold">Chicken blast</h5>
              <p className="text-[#ffffff84]">
                Juicy chicken chunks loaded with bold spices and rich flavors.
                Every bite delivers a fiery, cheesy explosion you won’t forget
              </p>{" "}
            </div>

            <div className="flex justify-between">
              <span className="text-2xl">₹549 </span>{" "}
              <div className="flex items-center text-[#FF8B67] cursor-pointer">
                Customize
                <span class="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center ">
          <img src={pepperoniPizza} alt="" className="h-60 relative top-30" />
          <div className=" pt-35 px-6 rounded-4xl pb-6 gap-6 flex flex-col bg-[#131313]">
            <div className="flex flex-col gap-3">
              <h5 className="text-3xl font-extrabold">Pepperoni Feast</h5>
              <p className="text-[#ffffff84]">
                Generous layers of spicy pepperoni over gooey mozzarella. Every
                slice delivers a perfect balance of heat and cheesy goodness
              </p>{" "}
            </div>

            <div className="flex justify-between">
              <span className="text-2xl">₹349 </span>{" "}
              <div className="flex items-center text-[#FF8B67] cursor-pointer">
                Customize
                <span class="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center ">
          <img src={chickenNewPizza} alt="" className="h-60 relative top-30" />
          <div className=" pt-35 px-6 rounded-4xl pb-6 gap-6 flex flex-col bg-[#131313]">
            <div className="flex flex-col gap-3">
              <h5 className="text-3xl font-extrabold">Chicken Tikka Delight</h5>
              <p className="text-[#ffffff84]">
                Smoky chicken chunks loaded with bold spices and creamy melted
                cheese. Every bite delivers a rich, spicy burst of flavor that
                hits just right
              </p>{" "}
            </div>

            <div className="flex justify-between">
              <span className="text-2xl">₹449 </span>{" "}
              <div className="flex items-center text-[#FF8B67] cursor-pointer">
                Customize
                <span class="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaMenu;
