import React from "react";
import chickenPizza from "/chicken.png";

const PizzaCustomize = () => {
  return (
    <div>
      <div className="bg-[#00000031] border border-[#ffffff3c] rounded-4xl text-white pizza-customize m-auto max-w-lg px-8">
        <div className="relative">
          <img
            src={chickenPizza}
            alt=""
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute">
            <h4 className="text-4xl font-extrabold">Chicken Blast</h4>
            <p className="text-lg text-[#ffffffbb] max-w-md">
              Classic hand-stretched sourdough, San Marzano tomatoes, fresh
              buffalo mozzarella, and aromatic basil.
            </p>
          </div>
        </div>

        <div className="mt-30 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h5>CHOOSE SIZE</h5>
            <div className="text-md flex gap-3">
              <span className="bg-[#262626] text-[#d3d3d3] px-3 py-1.5 rounded-xl">
                Regular &nbsp; ₹<span className="text-sm">199</span>{" "}
              </span>
              <span className="bg-[#262626] text-[#d3d3d3] px-3 py-1.5 rounded-xl">
                Medium &nbsp; ₹<span className="text-sm">299</span>{" "}
              </span>
              <span className=" px-3 py-1.5 rounded-xl bg-[#262626] text-[#d3d3d3]">
                Large &nbsp; ₹<span className="text-sm">499</span>{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5>CHOOSE CRUST</h5>
            <div className="text-md flex gap-3">
              <span className="bg-[#262626] text-[#d3d3d3] px-3 py-1.5 rounded-xl">
                Thin&nbsp;&nbsp;₹<span className="text-sm">199</span>{" "}
              </span>
              <span className="bg-[#262626] text-[#d3d3d3] px-3 py-1.5 rounded-xl">
                Cheese-brust &nbsp;&nbsp; ₹
                <span className="text-sm">299</span>{" "}
              </span>
              <span className="bg-[#262626] text-[#d3d3d3] px-3 py-1.5 rounded-xl">
                Pan &nbsp;&nbsp;₹<span className="text-sm">499</span>{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5>CHOOSE TOPPINGS</h5>
            <div className="text-md flex gap-3">
              <span className=" px-3 py-1.5 rounded-xl bg-[#262626] text-[#d3d3d3]">
                Olive&nbsp;&nbsp;₹<span className="text-sm">199</span>{" "}
              </span>
              <span className=" px-3 py-1.5 rounded-xl bg-[#262626] text-[#d3d3d3]">
                Corn &nbsp;&nbsp; ₹<span className="text-sm">299</span>{" "}
              </span>
              <span className=" px-3 py-1.5 rounded-xl bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]">
                Extra Cheese&nbsp;&nbsp;₹
                <span className="text-sm">499</span>{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="flex my-8 px-4  text-black gap-8 ">
          <button className="add-cart w-full font-[500] border bg-[#ff784d] text-md rounded-xl flex justify-center items-center gap-3">
            {" "}
            <span class="material-symbols-outlined">shopping_cart</span>Add to
            Cart
          </button>
          <div className="text-white flex flex-col items-end font-extrabold">
            <h6 className="text-[14px] text-[#ffffffe0] ">TOTAL</h6>
            <span className="text-2xl">₹249</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCustomize;
