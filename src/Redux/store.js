import { configureStore } from "@reduxjs/toolkit";
import pizzaPriceReducer from './Features/PizzaPriceSlice';
import pizzaCartReducer from './Features/PizzaCart'



export const store = configureStore({
    reducer:{
        PizzaPrice :  pizzaPriceReducer , 
        PizzaCart : pizzaCartReducer
    }
})