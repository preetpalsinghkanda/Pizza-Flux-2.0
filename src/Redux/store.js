import { configureStore } from "@reduxjs/toolkit";
import pizzaPriceReducer from './Features/PizzaPriceSlice';
import pizzaCartReducer from './Features/PizzaCart';
import userSliceReducer from './Features/UserSlice';




export const store = configureStore({
    reducer: {
        PizzaPrice: pizzaPriceReducer,
        PizzaCart: pizzaCartReducer,
        user: userSliceReducer
    }
})