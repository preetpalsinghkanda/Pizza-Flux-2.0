import { createSlice } from "@reduxjs/toolkit";
import { useContext } from "react";
import PizzaContext from "../../Context/Context";


const { setIsAddToCartEnabled } = useContext(PizzaContext)

const PizzaCart = createSlice({


    name: "PizaaCart",
    initialState: {
        PizzaCart: 0
    },
    reducers: {


        PizzaCartIncrement: (state) => {
            state.value += 1
        },
        PizzaCartDecrement: (state) => {
            if (state.value > 0) {
                state.value -= 1
            } else if (state.value <= 0) {
                setIsAddToCartEnabled(false)

            }
        }
    }



})


export const { PizzaCartIncrement, PizzaCartDecrement } = PizzaCart.actions
export default PizzaCart.reducer;