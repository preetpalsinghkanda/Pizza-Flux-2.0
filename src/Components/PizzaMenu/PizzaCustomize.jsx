import React from "react";
import chickenPizza from "/chicken.png";

const PizzaCustomize = () => {
  return (
    <div>
      <div className="border border-[white] text-white pizza-customize m-auto max-w-lg px-8">
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
              <span className="border px-3 py-1.5 rounded-xl">
                Regular &nbsp; ₹<span className="text-sm">199</span>{" "}
              </span>
              <span className="border px-3 py-1.5 rounded-xl">
                Medium &nbsp; ₹<span className="text-sm">299</span>{" "}
              </span>
              <span className="border px-3 py-1.5 rounded-xl">
                Large &nbsp; ₹<span className="text-sm">499</span>{" "}
              </span>
            </div>
          </div>

           <div className="flex flex-col gap-2">
            <h5>CHOOSE CRUST</h5>
            <div className="text-md flex gap-3">
              <span className="border px-3 py-1.5 rounded-xl">
                Thin&nbsp;&nbsp;₹<span className="text-sm">199</span>{" "}
              </span>
              <span className="border px-3 py-1.5 rounded-xl">
                Cheese-brust &nbsp;&nbsp; ₹
                <span className="text-sm">299</span>{" "}
              </span>
              <span className="border px-3 py-1.5 rounded-xl">
                Pan &nbsp;&nbsp;₹<span className="text-sm">499</span>{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5>CHOOSE TOPPINGS</h5>
            <div className="text-md flex gap-3">
              <span className="border px-3 py-1.5 rounded-xl">
                Olive&nbsp;&nbsp;₹<span className="text-sm">199</span>{" "}
              </span>
              <span className="border px-3 py-1.5 rounded-xl">
                Corn &nbsp;&nbsp; ₹
                <span className="text-sm">299</span>{" "}
              </span>
              <span className="border px-3 py-1.5 rounded-xl">
                Extra Cheese&nbsp;&nbsp;₹<span className="text-sm">499</span>{" "}
              </span>
            </div>
          </div>





        </div>


        <div className="flex my-8 px-4">
          <button>Add to Cart</button>
          <div>
            <h6>TOTAL</h6>
            <span>₹249</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCustomize;
