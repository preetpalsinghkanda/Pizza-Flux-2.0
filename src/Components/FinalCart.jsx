import React from "react";
import chickenPizza from "/chicken.png";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  PizzaCartDecrement,
  PizzaCartIncrement,
  removeFromCart,
} from "../Redux/Features/PizzaCart";

const FinalCart = () => {
  const dispatch = useDispatch();
  const { basePrice, sizePrice, crustPrice, toppingsPrice } = useSelector(
    (state) => state.PizzaPrice,
  );
  const cartItems = useSelector((state) => state.PizzaCart.items);

  // const FinalCartPizzaPrice = (basePrice + sizePrice + crustPrice + toppingsPrice) * cartValue;
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.pizzaPrice * item.qty,
    0,
  );

  const deliveryCharges = 99;
  const tax = subTotal * 0.09;
  const total = subTotal + deliveryCharges + tax;

  return (
    <div className=" m-auto max-w-6xl final-cart my-4 px-4 ">
      <div className="lg:flex items-start   justify-center gap-8 my-10 flex-col sm:flex-col  lg:flex-row md:flex-col md:justify-end">
        {/* cart left  */}

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-1 flex-col gap-5 border  max-h-102  overflow-y-auto">
            {cartItems.map((item, index) => (
              <div
                key={`${item.pizzaName}-${item.size}-${item.crust?.price}-${item.toppings}`}
                className=" gap-4 text-white  lg:mb-0  md:mb-8 sm:mb-8 mb-8 bg-[#ffffff0f] rounded-3xl flex items-center justify-between px-6 py-4  flex-col lg:flex-row md:flex-row"
              >
                <div className="flex gap-4   flex-col items-center lg:flex-row md:flex-row ">
                  <div className=" ">
                    <img src={item.pizzaImg} alt="" className="h-40 w-max " />
                  </div>

                  <div className="flex items-center justify-between  lg:text-start text-center sm:text-center md:text-start">
                    <div className="flex  flex-col gap-2">
                      <h3 className="text-3xl ">{item.pizzaName}</h3>
                      <span className="text-2xl ">
                        ₹<span>{item.pizzaPrice}</span>
                      </span>
                      <div className="flex  items-center lg:justify-start md:justify-start sm:justify-center  flex-row gap-2">
                        <span className="px-4 py-1 rounded-2xl border border-white text-[12px]">
                          {item.size?.name || "no size selected"}
                        </span>
                        <span className="px-4 py-1 rounded-2xl border border-white text-[12px]">
                          {item.crust?.name || "no crust"}
                        </span>
                        <span className="px-4 py-1 rounded-2xl border border-white text-[12px]">
                          {item.toppings?.name || "no toppings"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex border justify-center border-[#ffffff32] items-center gap-4 px-3 py-2 rounded-lg">
                  <span
                    onClick={() =>
                      dispatch(
                        removeFromCart({
                          pizzaName: item.pizzaName,
                          size: item.size,
                          crust: item.crust,
                          toppings: item.toppings,
                        }),
                      )
                    }
                    className="material-symbols-outlined cursor-pointer text-[#da371ac4]"
                  >
                    delete
                  </span>
                  <button
                    onClick={() =>
                      dispatch(
                        PizzaCartDecrement({
                          pizzaName: item.pizzaName,
                          size: item.size,
                          crust: item.crust,
                          toppings: item.toppings,
                        }),
                      )
                    }
                    className="border-0 flex items-center cursor-pointer"
                  >
                    <span className="material-symbols-outlined ">remove</span>
                  </button>
                  <span className="text-xl">{item.qty}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        PizzaCartIncrement({
                          pizzaName: item.pizzaName,
                          size: item.size,
                          crust: item.crust,
                          toppings: item.toppings,
                        }),
                      )
                    }
                    className="flex items-center cursor-pointer"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="bg-[#1a1a1a] text-white py-6  lg:min-w-sm sm:min-w-sm md:min-w-sm  min-w-full px-7 rounded-3xl sm:self-end self-end md:self-end">
            <h5 className="text-2xl">Order Summary</h5>
            <div className="flex flex-col mt-5 gap-3">
              <div className="flex justify-between items-center">
                <span className="text-[#ffffff7f]">Subtotal</span>
                <div className="text-xl">
                  ₹<span>{subTotal}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#ffffff7f]">Taxes(9%)</span>
                <div className="text-xl">
                  ₹<span>{tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex  justify-between items-center ">
                <span className="text-[#ffffff7f]">Delivery Fee</span>
                <span className="text-xl">₹99</span>
              </div>
            </div>
            <hr className="border-0 outline-1 my-5 outline-[#ffffff17]" />

            <div className="flex flex-col gap-1">
              <h6 className="text-[12px] text-[#d7552e] font-medium">
                GRAND TOTAL
              </h6>
              <span className="text-4xl font-bold">
                ₹<span>{total.toFixed(2)}</span>
              </span>
            </div>

            <button
              onClick={() => toast.success("Order Placed Successfully! ")}
              className=" cursor-pointer text-white font-extrabold my-5 rounded-xl w-full py-4 text-2xl bg-[#ff794e]"
            >
              Proceed
            </button>
            <div className="flex justify-center text-center text-sm text-[#ffffffac]">
              Estimated delivery: &nbsp;
              <span className="text-red-500"> 25-35 mins</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalCart;
