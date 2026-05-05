import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField, setErrors, loginSuccess } from "../Redux/Features/UserSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};

    if (!user.email.includes("@")) {
      errors.email = "Valid email required";
    }

    if (user.pass.length < 6) {
      errors.pass = "Password must be 6+ characters";
    }

    dispatch(setErrors(errors));
    return Object.values(errors).some((err) => err);
  };

  const handleLogin = async () => {
    const hasErrors = validate();

    if (hasErrors) {
      toast.error("Fix errors first!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.pass,
      );

      dispatch(loginSuccess(userCredential.user));
      toast.success("Login Successful :)");

      navigate("/");
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  return (
     <div className="border md:w-max lg:m-auto  lg:my-10 md:my-10 md:m-auto my-10 mx-4 bg-[#ffffff10]  signup py-12 px-6 rounded-3xl flex  flex-col gap-6 min-w-md">
      <div className="flex flex-col text-center">
        <h3 className="signup-heading lg:text-2xl md:text-2xl text-xl text-white">
          Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Account
        </h3>
        <p className="text-md text-[#ffffff90]">Welcome Buddy</p>
      </div>

      {/* Email */}

      <div className="w-full flex  flex-col gap-3">
      <input
        value={user.email}
        onChange={(e) =>
          dispatch(setField({ field: "email", value: e.target.value }))
        }
        placeholder="Enter Email"
        className="p-2 px-5 rounded-xl bg-[#1f1c1a] text-white w-full"
      />
      {user.errors.email && <p className="text-red-500">{user.errors.email}</p>}</div>

      {/* Password */}
       <div className="w-full flex  flex-col gap-3">     
         <input
        type="password"
        value={user.pass}
        onChange={(e) =>
          dispatch(setField({ field: "pass", value: e.target.value }))
        }
        placeholder="Enter Password"
        className="p-2 px-5 rounded-xl bg-[#1f1c1a] text-white"
      />
      {user.errors.pass && <p className="text-red-500">{user.errors.pass}</p>}</div>


      {/* Button */}
      <button
        onClick={handleLogin}
        className="bg-[#ff4d00] text-2xl font-[800] py-2 rounded-xl  cursor-pointer"
      >
        Login
      </button>

       <span className="text-[#ffffff76] text-center">
        Don't have any Account ?{" "}
        <span className="text-red-500 cursor-pointer">Signup here</span>
      </span>
    </div>
  );
};

export default Login;
