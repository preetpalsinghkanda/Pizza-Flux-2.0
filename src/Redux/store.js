import { configureStore } from "@reduxjs/toolkit";
import pizzaPriceReducer from './Features/PizzaPriceSlice';



export const store = configureStore({
    reducer:{
        PizzaPrice :  pizzaPriceReducer
    }
})