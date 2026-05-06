import React, { useContext, useState } from "react";
import PizzaLogo from "/PizzaLogo.png";
import PizzaContext from "../Context/Context";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInWithPopup, signOut } from "firebase/auth";
import { logout } from "../Redux/Features/UserSlice";
import { auth, provider } from "../firebase";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isNavBarOpen, setIsNavBar] = useState(false);

  const user = useSelector((state) => state.user);

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };
  return (
    <>
      <div className="bg-[#111110]   flex justify-center border-b-1 border-[#ffffff13]">
        <div className="navbar flex justify-around lg:justify-between items-center w-full py-2 max-w-6xl m-auto">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={PizzaLogo} alt="" className="md:h-15 h-10 " />
            <span className="md:text-3xl text-xl text-[#ff5f2e]">
              PizzaFlux 2.0
            </span>
          </div>

          <div className=" flex-row items-center gap-4 hidden md:flex">
            <div
              onClick={() => navigate("/menu")}
              className={`cursor-pointer ${
                location.pathname === "/menu"
                  ? "bg-[#f6a823] text-black"
                  : "text-white"
              } hover:bg-[#727272] hover:text-white px-2 py-1 rounded-lg flex items-center gap-2`}
            >
              <span className="material-symbols-outlined ">menu_book_2</span>
            </div>
            <div
              onClick={() => navigate("/cart")}
              className={`cursor-pointer ${
                location.pathname === "/cart"
                  ? "bg-[#f6a823] text-black"
                  : "text-white"
              } hover:bg-[#727272] hover:text-white px-2 py-1 rounded-lg flex items-center gap-2`}
            >
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>

            {user.isAuth ? (
              <div
                onClick={handleLogout}
                className="cursor-pointer text-white hover:bg-[#727272] hover:text-white px-2 py-1 rounded-lg flex items-center gap-2"
              >
                <span className="material-symbols-outlined">logout</span>
                <span className="text-lg">Logout</span>
              </div>
            ) : (
              <div
                onClick={() => navigate("/signup")}
                className={`cursor-pointer ${
                  location.pathname === "/signup"
                    ? "bg-[#f6a823] text-black"
                    : "text-white"
                } hover:bg-[#727272] hover:text-white px-2 py-1 rounded-lg flex items-center gap-2`}
              >
                <span className="material-symbols-outlined">person_edit</span>
                <span className="text-lg">Signup</span>
              </div>
            )}
          </div>

          <div
            onClick={() => setIsNavBar(!isNavBarOpen)}
            className=" items-center md:hidden flex "
          >
            {!isNavBarOpen ? (
              <span className="material-symbols-outlined text-white">
                dehaze
              </span>
            ) : (
              <span className="material-symbols-outlined text-white">
                close
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
