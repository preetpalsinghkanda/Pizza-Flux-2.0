import { createSlice } from "@reduxjs/toolkit";





const PizzaCart = createSlice({


    name: "PizaaCart",
    initialState: {
        value: []
    },
    reducers: {


        addToCart: (state, action) => {
            const { pizzaName, size, crust, toppings } = action.payload;

            const alreadyItem = state.value.find(
                (item) =>
                    item.pizzaName === pizzaName &&
                    item.size === size &&
                    item.crust === crust &&
                    JSON.stringify(item.toppings) === JSON.stringify(toppings)
            );

            if (alreadyItem) {
                alreadyItem.qty += 1;
            } else {
                state.value.push({ ...action.payload, qty: 1 });
            }
        },

        removeFromCart: (state, action) => {
            state.value.splice(action.payload, 1);
        },




        PizzaCartIncrement: (state, action) => {
            state.value[action.payload].qty += 1;
        },


        PizzaCartDecrement: (state, action) => {
            if (state.value[action.payload].qty > 1) {
                state.value[action.payload].qty -= 1
            }
        }
    }



})


export const { addToCart, removeFromCart, PizzaCartIncrement, PizzaCartDecrement } = PizzaCart.actions
export default PizzaCart.reducer;