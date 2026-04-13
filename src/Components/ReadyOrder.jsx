import React from "react";
import cook from "/cook.png";

const ReadyOrder = () => {
  return (
    <div className=" m-auto w-max readyorder flex ">
      <img src={cook} alt="" className="h-100" />
      <div className="  flex gap-4 flex-col justify-center items-center px-12 py-12 rounded-3xl">
        <h3 className="text-[#ff5f2e] text-4xl font-[800]">Ready to Order ?</h3>
        <p className="text-[#ffffffb7]">
          Create your account and get your first delivery free!
        </p>
        <button className="bg-[#b32c02] text-white px-6 py-3 rounded-xl text-lg ">
          Get Started, It's Free
        </button>
      </div>
    </div>
  );
};

export default ReadyOrder;
