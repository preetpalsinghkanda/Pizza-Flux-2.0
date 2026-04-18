import { useState } from "react";
import PizzaContext from "./Context";
import chickenPizza from "/chicken.png";
import pepperoniPizza  from '/pepperoni.png';
import chickenNewPizza from '/pepperoni.png';

export const PizzaContextProvider =({children})=>{



    const customizePizzaInfo = [
        {
            id: 1,
            pizzaName : "Chicken blast",
            pizzaImg : chickenPizza,
            dis : "Juicy chicken chunks loaded with bold spices and rich flavors. Every bite delivers a fiery, cheesy explosion you won’t forget",
            pizzaPrice : 249,


        },
        {

            id: 2,
            pizzaName : "Pepperoni Feast",
            pizzaImg : pepperoniPizza,
             dis: "Generous layers of spicy pepperoni over gooey mozzarella. Every slice delivers a perfect balance of heat and cheesy goodness",
             pizzaPrice : 199,

        },
        {
            id: 3 , 
            pizzaName : "Chicken Tikka Delight",
            pizzaImg : chickenNewPizza,
            dis : "Smoky chicken chunks tossed in bold spices, layered over creamy melted cheese with Tomato and satisfying pizza experience",
            pizzaPrice : 289,

        }
    ]

    const [selectedPizza , setSelectedPizza] = useState(null)

    return(
        <PizzaContext.Provider value={customizePizzaInfo , selectedPizza,setSelectedPizza  }>
            {children}
        </PizzaContext.Provider>
    )
}