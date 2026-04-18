import React from "react";
// import emptyCartImg from "/emptycart.png";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate()
  return (
    <div className=" w-max m-auto flex items-center flex-col my-20 empty-cart">
      <lord-icon
        src="https://cdn.lordicon.com/edkuxwya.json"
        trigger="loop"
        colors="primary:#c71f16,secondary:#e4e4e4"
        style={{ width: "200px", height: "200px" }}
      ></lord-icon>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[#fffffff1] text-4xl">Your cart is empty</h2>
        <p className="text-[#ffffffa2]">
          Build your perfect pizza and add it to your cart
        </p>
      </div>
      <button onClick={()=>navigate("/menu")} className="bg-[#ff7700d9] cursor-pointer text-white px-5 py-2 text-xl rounded-xl mt-6">
        Build Your Pizza
      </button>
      <p className="text-[#ffffffab] text-sm mt-1">*Right Now :)</p>
    </div>
  );
};

export default EmptyCart;
