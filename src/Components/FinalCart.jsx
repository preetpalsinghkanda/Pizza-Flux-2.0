import React from "react";
import chickenPizza from "/chicken.png";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

const FinalCart = () => {
  const { basePrice, sizePrice, crustPrice, toppingsPrice } = useSelector(
    (state) => state.PizzaPrice,
  );
  const cartItems = useSelector((state) => state.PizzaCart.value);

  // const FinalCartPizzaPrice = (basePrice + sizePrice + crustPrice + toppingsPrice) * cartValue;
  const subTotal  = cartItems.reduce(
    (acc , item) => acc + item.pizzaPrice * item.qty , 0 
  )

  const deliveyCharges = 99;
  const tax = subTotal  * 0.09;
  const total = subTotal + deliveyCharges + tax;

  return (
    <div className=" m-auto max-w-6xl final-cart my-4 px-4 ">
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-6xl font-bold">Your Feast. </h3>
        <p className="text-white text-xl">One more step away from your Pizza</p>
      </div>

      <div className="lg:flex items-start   justify-center gap-8 my-10 flex-col sm:flex-col  lg:flex-row md:flex-col md:justify-end">
        {/* cart left  */}

        <div className="flex flex-1 flex-col gap-5 ">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            cartItems.map((item, index) => (
              <div className=" gap-4 text-white  bg-[#ffffff0f] rounded-3xl flex items-center justify-between px-6 py-4  flex-col lg:flex-row md:flex-row">
                <div className="flex gap-8 flex-col items-center lg:flex-row md:flex-row ">
                  <div className=" ">
                    <img src={item.pizzaImg} alt="" className="h-40 w-max " />
                  </div>

                  <div className="flex items-center justify-between text-center">
                    <div className="flex  flex-col gap-2">
                      <h3 className="text-4xl">{item.pizzaName}</h3>
                      <span className="text-2xl ">
                        ₹<span>{item.pizzaPrice}</span>
                      </span>
                      <div className="flex  items-center justify-center flex-row gap-2">
                        <span className="px-4 py-1 rounded-2xl border border-white text-[12px]">
                          {item.size}
                        </span>
                        <span className="px-4 py-1 rounded-2xl border border-white text-[12px]">
                          {item.crust}
                        </span>
                        <span className="px-4 py-1 rounded-2xl border border-white text-[12px]">
                          {item.toppings}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex border justify-center border-[#ffffff32] items-center gap-4 px-3 py-2 rounded-lg">
                  <span onClick={()=> dispatch(removeItem(item.id))} className="material-symbols-outlined cursor-pointer text-[#da371ac4]">
                    delete
                  </span>
                  <button className="border-0 flex items-center cursor-pointer">
                    <span onClick={()=> dispatch(PizzaCartDecrement(item.id))} className="material-symbols-outlined ">remove</span>
                  </button>
                  <span className="text-xl">{item.qty}</span>
                  <button onClick={()=>{ dispatch(PizzaCartIncrement(item.id))}} className="flex items-center cursor-pointer">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>

              
            ))
          )}
        </div>

       
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

          <button className=" text-white font-extrabold my-5 rounded-xl w-full py-4 text-2xl bg-[#ff794e]">
            Proceed
          </button>
          <div className="flex justify-center text-center text-sm text-[#ffffffac]">
            Estimated delivery: &nbsp;
            <span className="text-red-500"> 25-35 mins</span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FinalCart;
