import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";


const AlreadyLogin = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (user.isAuth) {
    toast.error("User Already Logged In ...");

    return <Navigate to="/" replace />;
  }

  return children;
};

export default AlreadyLogin;

