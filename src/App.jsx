import React from "react";
import NavBar from "./Components/NavBar";
import WhyPizzaFlux from "./Components/WhyPizzaFlux/WhyPizzaFlux";
import ReadyOrder from "./Components/ReadyOrder";
import Hero from "./Components/Hero";
import EmptyCart from "./Components/EmptyCart";
import Signup from "./Components/Signup";
import PizzaMenuHero from "./Components/PizzaMenu/PizzaMenuHero";
import PizzaMenu from "./Components/PizzaMenu/PizzaMenu";
import PizzaCustomize from "./Components/PizzaMenu/PizzaCustomize";
import PizzaContext from "./Context/Context";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import FinalCart from "./Components/FinalCart";
import AlreadyLogin from "./Components/AlreadyLogin";
import { Toaster } from "react-hot-toast";
import Login from "./Components/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "./Redux/Features/UserSlice";

const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(loginSuccess());
    } else {
      dispatch(logout());
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <div>
      <Toaster />
      <NavBar />
      <div className="flex flex-col gap-35 my-15 ">
     <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WhyPizzaFlux />
                <ReadyOrder />
              </>
            }
          />

          <Route path="/signup" element={
            <AlreadyLogin>
            <Signup />
            </AlreadyLogin>
            } />

          <Route
            path="/menu"
            element={
              <>
                <PizzaMenuHero />
                <PizzaMenu />
              </>
            }
          />

          <Route
            path="/cart"
            element={
              <>
                {" "}
                <FinalCart />{" "}
              </>
            }
          />

          <Route
            path="/login"
            element={
              <AlreadyLogin>
              <Login/>
              </AlreadyLogin>
            }
          />
        </Routes> 

        
      </div>

      <PizzaCustomize />
    </div>
  );
};

export default App;
