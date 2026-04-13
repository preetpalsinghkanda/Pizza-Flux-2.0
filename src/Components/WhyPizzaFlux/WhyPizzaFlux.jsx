import React from "react";
import WhyPoint from "./WhyPoint";

const WhyPizzaFlux = () => {
  return (
  
      <div className="border max-w-7xl m-auto" >
        <h3>Why PizzaFlux 2.0 ?</h3>
        <div className="flex gap-4 ">
          <WhyPoint
            src={"https://cdn.lordicon.com/xktzfwru.json"}
            colors={
              "primary:#1a1a1a,secondary:#f24c00,tertiary:#ebe6ef,quaternary:#ffc738"
            }
            heading={"Customize in Seconds"}
            para={"Customize your perfect pizza with our intuitive builder like size, crust, toppings and more."}
          />
          <WhyPoint
            src={"https://cdn.lordicon.com/gdowkrjt.json"}
            colors={
              "primary:#1a1a1a,secondary:#ebe6ef,tertiary:#f24c00,quaternary:#e8e230"
            }
            heading={"Fast Delivery"}
             para={"Hot, fresh pizza delivered to your door in 25-35 minutes or it's free."}
          />
          <WhyPoint
            src={"https://cdn.lordicon.com/yseqjcer.json"}
            heading={"Quality Guarantee"}
             para={"Only the freshest ingredients, sourced locally. 100% satisfaction guaranteed."}
          />
          <WhyPoint
            src={"https://cdn.lordicon.com/uihwbzln.json"}
            heading={"7 Star Rated"}
             para={"Thousands of happy customers trust us for their pizza nights every week."}
          />
        </div>
      </div>
   
  );
};

export default WhyPizzaFlux;
