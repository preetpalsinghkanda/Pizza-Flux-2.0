import React from "react";

const Signup = () => {
  return (
    <div className="border border-white w-max m-auto my-10 text-white signup py-12 px-8">
      <div className="flex flex-col text-center">
        <h3 className="signup-heading text-2xl">
          Create&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Account
        </h3>
        <p className="text-md ">Join us and start ordering</p>
      </div>

      <div>
        {/* name */}
        <div>
          <div className="">
            <label htmlFor="">Full Name</label>
            <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
              <span class="material-symbols-outlined">person</span>
              <input
                type="text"
                placeholder="PreetPal Singh"
                className=" outline-0 min-w-md text-lg"
              />
            </div>
          </div>

          {/* email */}
          <div className="">
            <label htmlFor="">Full Name</label>
            <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
              <span class="material-symbols-outlined">person</span>
              <input
                type="text"
                placeholder="PreetPal Singh"
                className=" outline-0 min-w-md"
              />
            </div>
          </div>

          {/* phone number */}
          <div className="">
            <label htmlFor="">Full Name</label>
            <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
              <span class="material-symbols-outlined">person</span>
              <input
                type="text"
                placeholder="PreetPal Singh"
                className=" outline-0 min-w-md"
              />
            </div>
          </div>
        </div>

        <div></div>
      </div>

      <button className="bg-[#ff4d00] w-full py-2 text-2xl rounded-2xl">
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
