import { createSlice } from "@reduxjs/toolkit";
import { useContext } from "react";
import PizzaContext from "../../Context/Context";




const PizzaCart = createSlice({


    name: "PizaaCart",
    initialState: {
        value: 0
    },
    reducers: {


        PizzaCartIncrement: (state) => {
            state.value += 1
        },
        PizzaCartDecrement: (state) => {
            if (state.value > 0) {
                state.value -= 1
            }
        }
    }



})


export const { PizzaCartIncrement, PizzaCartDecrement } = PizzaCart.actions
export default PizzaCart.reducer;