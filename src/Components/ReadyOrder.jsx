import React from "react";
import cook from "/cook.png";
import { useNavigate } from "react-router-dom";
const ReadyOrder = () => {
  const navigate = useNavigate()
  return (
    <div className="m-auto max-w-md md:max-w-2xl readyorder flex flex-col md:flex-row items-center gap-4">
      <img src={cook} alt="" className="h-100 w-auto" />
      <div className="  flex gap-4 flex-col justify-center items-center rounded-3xl">
        <h3 className="text-[#ff5f2e] text-4xl font-[800]">Ready to Order ?</h3>
        <p className="text-[#ffffffb7]  break-normal px-3 text-center">
          Create your account and get your first delivery free!
        </p>
        <button  onClick={()=>navigate("/signup")} className="bg-[#b32c02] cursor-pointer text-white px-6 py-3 rounded-xl text-lg ">
          Get Started, It's Free
        </button>
      </div>
    </div>
  );
};

export default ReadyOrder;
