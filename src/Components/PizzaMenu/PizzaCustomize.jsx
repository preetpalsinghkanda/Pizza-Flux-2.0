import React, { useContext } from "react";
import chickenPizza from "/chicken.png";
import pepperoniPizza from "/pepperoni.png";
import chickenNewPizza from "/chickennew.png";
import PizzaContext from "../../Context/Context";
import { useDispatch } from "react-redux";
import {
  setSizePrice,
  setCrustPrice,
  setToppingsPrice,
} from "../../Redux/Features/PizzaPriceSlice";

const PizzaCustomize = () => {
  const {
    selectedPizza,
    setSelectedPizza,
    size,
    setSize,
    crust,
    setCrust,
    toppings,
    setToppings,
  } = useContext(PizzaContext);
  const dispatch = useDispatch();

  if (!selectedPizza) return null;
  return (
    <div className="no-scrollbar fixed inset-0 bg-black/90 flex justify-center items-center z-50 overflow-y-auto py-20">
      <div className="bg-[black] border border-[#ffffff3c] rounded-4xl text-white pizza-customize m-auto max-w-lg px-8">
        <span
          onClick={() => setSelectedPizza(null)}
          className="absolute top-4 right-4 cursor-pointer text-xl"
        >
          <span class="material-symbols-outlined">close</span>
        </span>
        <div className="relative">
          <img
            src={selectedPizza.pizzaImg}
            alt=""
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute">
            <h4 className="text-4xl font-extrabold">
              {selectedPizza.pizzaName}
            </h4>
            <p className="text-lg text-[#ffffffbb] max-w-md">
              {selectedPizza.dis}
            </p>
          </div>
        </div>

        <div className="mt-30 flex flex-col gap-6">
          <div className="flex flex-col gap-2 mt-6">
            <h5>CHOOSE SIZE</h5>
            <div className="text-md flex gap-3">
              <span
                onClick={() => {
                  setSize(249);
                  dispatch(setSizePrice(249));
                }}
                className={`${size === 249 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Regular &nbsp; ₹<span className="text-sm">249</span>{" "}
              </span>
              <span
                onClick={() => {
                  setSize(299);
                  dispatch(setSizePrice(299));
                }}
                className={`${size === 299 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer px-3 py-1.5 rounded-xl`}
              >
                Medium &nbsp; ₹<span className="text-sm">299</span>{" "}
              </span>
              <span
                onClick={() => {
                  setSize(349);
                  dispatch(setSizePrice(349));
                }}
                className={`${size === 349 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"} cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Large &nbsp; ₹<span className="text-sm">349</span>{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5>CHOOSE CRUST</h5>
            <div className="text-md flex gap-3">
              <span
                onClick={() => {
                  if (crust === 99) {
                    setCrust(0);
                  } else {
                    setCrust(99);
                    dispatch(setCrustPrice(99));
                  }
                }}
                className={`${crust === 99 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Thin&nbsp;&nbsp;₹<span className="text-sm">99</span>{" "}
              </span>
              <span
                onClick={() => {
                  if (crust === 149) {
                    setCrust(0);
                  } else {
                    setCrust(149);
                    dispatch(setCrustPrice(149));
                  }
                }}
                className={`${crust === 149 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Cheese-brust &nbsp;&nbsp; ₹
                <span className="text-sm">149</span>{" "}
              </span>
              <span
                onClick={() => {
                  if (crust === 199) {
                    setCrust(0);
                  } else {
                    setCrust(199);
                    dispatch(setCrustPrice(199));
                  }
                }}
                className={`${crust === 199 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Pan &nbsp;&nbsp;₹<span className="text-sm">199</span>{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5>CHOOSE TOPPINGS</h5>
            <div className="text-md flex gap-3">
             <span
                onClick={() => {
                  if (toppings === 149) {
                    setToppings(0);
                  } else {
                    setToppings(149);
                    dispatch(setToppingsPrice(149));
                  }
                }}
                className={`${toppings === 149 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Olive&nbsp;&nbsp;₹<span className="text-sm">149</span>{" "}
              </span>
               <span
                onClick={() => {
                  if (toppings === 179) {
                    setToppings(0);
                  } else {
                    setToppings(179);
                    dispatch(setToppingsPrice(179));
                  }
                }}
                className={`${toppings === 179 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Corn &nbsp;&nbsp; ₹<span className="text-sm">179</span>{" "}
              </span>
               <span
                onClick={() => {
                  if (toppings === 249) {
                    setToppings(0);
                  } else {
                    setToppings(249);
                    dispatch(setToppingsPrice(249));
                  }
                }}
                className={`${toppings === 249 ? "bg-[#261b17] text-[#bf7e6b] border border-[#bf7e6b]" : "bg-[#262626] text-[#d3d3d3]"}  cursor-pointer  px-3 py-1.5 rounded-xl`}
              >
                Extra Cheese&nbsp;&nbsp;₹
                <span className="text-sm">249</span>{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="flex my-8 px-4  text-black gap-8 ">
          <button className="add-cart w-full font-[500] border bg-[#ff784d] text-md rounded-xl flex justify-center items-center gap-3">
            {" "}
            <span className="material-symbols-outlined">shopping_cart</span>Add
            to Cart
          </button>
          <div className="text-white flex flex-col items-end font-extrabold">
            <h6 className="text-[14px] text-[#ffffffe0] ">TOTAL</h6>
            <span className="text-2xl">₹{selectedPizza.pizzaPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCustomize;
