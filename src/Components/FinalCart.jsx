import React from "react";

const FinalCart = () => {
  return (
    <div className=" m-auto max-w-6xl final-cart">
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-6xl font-bold">Your Feast. </h3>
        <p className="text-white text-xl">One more step away from your Pizza</p>
      </div>

      <div>
        {/* cart left  */}
        <div className="border "></div>

        {/* cart right  */}
        <div className="bg-[#1a1a1a] text-white py-6 mt-5 px-7 rounded-3xl max-w-sm">
          <h5 className="text-2xl">Order Summary</h5>
          <div className="flex flex-col mt-5 gap-3">
            <div className="flex justify-between items-center">
              <span className="text-[#ffffff7f]">Subtotal</span>
              <div className="text-xl">
                ₹<span>500</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#ffffff7f]">Taxes(9%)</span>
              <div className="text-xl">
                ₹<span>120</span>
              </div>
            </div>
            <div className="flex  justify-between items-center ">
              <span className="text-[#ffffff7f]">Delivery Fee</span>
              <span className="text-xl">₹99</span>
            </div>
          </div>
          <hr className="border-0 outline-1 my-5 outline-[#ffffff17]" />

          <div className="flex flex-col gap-1"> 
            <h6 className="text-[12px] text-[#d7552e] font-medium">GRAND TOTAL</h6>
            <span className="text-4xl font-bold">
              ₹<span>540.10</span>
            </span>
          </div>

          <button className=" text-white font-extrabold my-5 rounded-xl w-full py-4 text-2xl bg-[#ff794e]">
            Proceed
          </button>
         <div className="flex justify-center text-center text-sm text-[#ffffffac]">
  Estimated delivery: &nbsp;<span className="text-red-500"> 25-35 mins</span>
</div>
        </div>
      </div>
    </div>
  );
};

export default FinalCart;
