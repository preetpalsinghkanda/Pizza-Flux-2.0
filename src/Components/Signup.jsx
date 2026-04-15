import React from "react";

const Signup = () => {
  return (
    <div className="border md:w-max lg:m-auto  lg:my-10 md:my-10 md:m-auto my-10 mx-4 bg-[#ffffff10]  signup py-12 px-6 rounded-3xl flex  flex-col gap-8">
      <div className="flex flex-col text-center">
        <h3 className="signup-heading lg:text-2xl md:text-2xl text-xl text-white">
          Create&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Account
        </h3>
        <p className="text-md text-[#ffffff90]">Join us and start ordering</p>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          {/* name */}
          <div className="">
            <label htmlFor="user-name" className="text-[white] text-md">
              Full Name
            </label>
            <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
              <span class="material-symbols-outlined text-[#ffffffad]">
                person
              </span>
              <input
                type="text"
                placeholder="PreetPal Singh"
                className=" outline-0  text-lg text-[#ffffffab]"
              />
            </div>
            <p className="text-[#ff0000b5] text-sm mt-1 hidden">
              Invalid Name :(
            </p>
          </div>

          {/* email */}
          <div className="">
            <label htmlFor="email" className="text-[white] text-md">
              Email
            </label>
            <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
              <span class="material-symbols-outlined text-[#ffffffad]">
                mail
              </span>
              <input
                type="text"
                placeholder="preetpal@gamil.com"
                className=" outline-0  text-lg text-[#ffffffab]"
              />
            </div>
            <p className="text-[#ff0000b5] text-sm mt-1 hidden">
              Please Enter a Valid Email :(
            </p>
          </div>

          {/* phone number */}
          <div className="">
            <label htmlFor="phone-number" className="text-[white] text-md">
              Phone Number
            </label>
            <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
              <span class="material-symbols-outlined text-[#ffffffab]">
                call
              </span>
              <input
                type="text"
                placeholder="9625290480"
                className=" outline-0  text-lg text-[#ffffffab] "
              />
            </div>
            <p className="text-[#ff0000b5] text-sm mt-1 hidden">
              Please Enter a Valid Phone Number :(
            </p>
          </div>

          {/* Password  */}
          <div className="flex gap-3 flex-col lg:flex-row md:flex-row">
            {/* password one  */}
            <div className="">
              <label htmlFor="pass" className="text-[white] text-md">
                Phone Number
              </label>
              <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
                <span class="material-symbols-outlined text-[#ffffffab]">
                  lock
                </span>
                <input
                  type="text"
                  placeholder="******"
                  className=" outline-0  text-lg text-[#ffffffab]"
                />
              </div>
              <p className="text-[#ff0000b5] text-sm mt-1 hidden">
                Password must be at least 6 characters :(
              </p>
            </div>

            {/* password two  */}
            <div className="">
              <label htmlFor="confirm-pass" className="text-[white] text-md">
                Phone Number
              </label>
              <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
                <span className="material-symbols-outlined text-[#ffffffab]">
                  lock
                </span>
                <input
                  type="text"
                  placeholder="******"
                  className=" outline-0  text-lg text-[#ffffffab]"
                />
              </div>
              <p className="text-[#ff0000b5] text-sm mt-1 hidden">
                Passwords do not match :(
              </p> 
            </div>
          </div>
        </div>

        <div className="flex mt-4 gap-2">
          <span class="material-symbols-outlined text-[#ffffffc8] cursor-pointer">circle</span>
          <p className="text-[#ffffffbd]">I accept the terms and conditions</p>
        </div>
      </div>

      <button className="bg-[#ff4d00] w-full py-2 text-2xl rounded-2xl font-[800] cursor-pointer">
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
