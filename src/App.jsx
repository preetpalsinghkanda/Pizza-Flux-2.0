import React from "react";
import NavBar from "./Components/NavBar";
import WhyPizzaFlux from "./Components/WhyPizzaFlux/WhyPizzaFlux";
import ReadyOrder from "./Components/ReadyOrder";
import Hero from "./Components/Hero";
import EmptyCart from "./Components/EmptyCart";
import Signup from "./Components/Signup";
import PizzaMenuHero from "./Components/PizzaMenu/PizzaMenuHero";

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <div className="flex flex-col gap-35 my-15 ">
        <Hero />
        <WhyPizzaFlux /> <ReadyOrder />{" "}
      </div> */}
      {/* <EmptyCart/> */}
      {/* <Signup/> */}
      <PizzaMenuHero/>
    </div>
  );
};

export default App;
