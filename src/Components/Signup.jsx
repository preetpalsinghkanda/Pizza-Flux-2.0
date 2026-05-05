import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setField, setErrors, loginSuccess } from "../Redux/Features/UserSlice";

import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const validateField = (field, value, data) => {
    let error = "";

    if (field === "name") {
      if (!value.trim()) {
        error = "Name required";
      }
    } else if (field === "email") {
      if (!value.includes("@")) {
        error = "Please Enter a Valid Email :(";
      }
    } else if (field === "phoneNo") {
      if (value.length !== 10) {
        error = "Please Enter a Valid Phone Number :(";
      }
    } else if (field === "pass") {
      if (value.length < 6) {
        error = "Password must be at least 6 characters :(";
      }
    } else if (field === "confirmPass") {
      if (value !== data.pass) {
        error = "Passwords do not match :(";
      }
    } else if (field === "terms") {
      if (!value) error = "Accept terms";
    }

    if (Object.keys(error).length > 0) {
      toast.error("Please fill all details correctly");
    }
    return error;
  };

  const handleChange = (field, value) => {
    dispatch(setField({ field, value }));

    const newData = {
      ...user,
      [field]: value,
    };

    const fieldError = validateField(field, value, newData);

    dispatch(
      setErrors({
        ...user.errors,
        [field]: fieldError,
      }),
    );
  };

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
              <span className="material-symbols-outlined text-[#ffffffad]">
                person
              </span>
              <input
                value={user.name}
                onChange={(e) => {
                  handleChange("name", e.target.value);
                }}
                type="text"
                placeholder="PreetPal Singh"
                className=" outline-0  text-lg text-[#ffffffab]"
              />
            </div>

            {user.errors.name && (
              <p className="text-[#ff0000b5] text-sm mt-1 ">
                {user.errors.name}
              </p>
            )}
          </div>

          {/* email */}
          <div className="">
            <label htmlFor="email" className="text-[white] text-md">
              Email
            </label>
            <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
              <span className="material-symbols-outlined text-[#ffffffad]">
                mail
              </span>
              <input
                value={user.email}
                onChange={(e) => handleChange("email", e.target.value)}
                type="text"
                placeholder="preetpal@gamil.com"
                className=" outline-0  text-lg text-[#ffffffab]"
              />
            </div>
            {user.errors.email && (
              <p className="text-[#ff0000b5] text-sm mt-1 ">
                {user.errors.email}
              </p>
            )}
          </div>

          {/* phone number */}
          <div className="">
            <label htmlFor="phone-number" className="text-[white] text-md">
              Phone Number
            </label>
            <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
              <span className="material-symbols-outlined text-[#ffffffab]">
                call
              </span>
              <input
                value={user.phoneNo}
                onChange={(e) => handleChange("phoneNo", e.target.value)}
                type="number"
                placeholder="9625290480"
                className=" outline-0  text-lg text-[#ffffffab] "
              />
            </div>

            {user.errors.phoneNo && (
              <p className="text-[#ff0000b5] text-sm mt-1 ">
                {user.errors.phoneNo}
              </p>
            )}
          </div>

          {/* Password  */}
          <div className="flex gap-3 flex-col lg:flex-row md:flex-row">
            {/* password one  */}
            <div className="">
              <label htmlFor="pass" className="text-[white] text-md">
                Password
              </label>
              <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
                <span className="material-symbols-outlined text-[#ffffffab]">
                  lock
                </span>
                <input
                  value={user.pass}
                  onChange={(e) => handleChange("pass", e.target.value)}
                  type="password"
                  placeholder="******"
                  className=" outline-0  text-lg text-[#ffffffab]"
                />
              </div>
              {user.errors.pass && (
                <p className="text-[#ff0000b5] text-sm mt-1 ">
                  {user.errors.pass}
                </p>
              )}
            </div>

            {/* password two  */}
            <div className="">
              <label htmlFor="confirm-pass" className="text-[white] text-md">
                Confirm Password
              </label>
              <div className="flex items-center gap-2  px-2 py-2 rounded-xl  bg-[#1f1c1a]">
                <span className="material-symbols-outlined text-[#ffffffab]">
                  lock
                </span>
                <input
                  value={user.confirmPass}
                  onChange={(e) => handleChange("confirmPass", e.target.value)}
                  type="password"
                  placeholder="******"
                  className=" outline-0  text-lg text-[#ffffffab]"
                />
              </div>

              {user.errors.confirmPass && (
                <p className="text-[#ff0000b5] text-sm mt-1 ">
                  {user.errors.confirmPass}
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          onClick={() => handleChange("terms", !user?.terms)}
          className="flex mt-4 gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={user?.terms}
            onChange={() => handleChange("terms", !user?.terms)}
            className="hidden"
          />

          <span className="material-symbols-outlined text-[#ffffffc8]">
            {user.terms ? "check_circle" : "radio_button_unchecked"}
          </span>

          <p className="text-[#ffffffbd]">I accept the terms and conditions</p>
        </div>

        {user.errors.terms && (
          <p className="text-[#ff0000b5] text-sm mt-1 ">{user.errors.terms}</p>
        )}
      </div>

      <button
        onClick={() => {
          dispatch(loginSuccess());
          toast.success("Successfully Signup!");
        }}
        disabled={Object.keys(user.errors).length > 0}
        className={`w-full py-2 text-2xl rounded-2xl cursor-pointer font-[800] ${
          Object.keys(user.errors).length > 0
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-[#ff4d00]"
        }`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
