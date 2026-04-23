import { createSlice } from "@reduxjs/toolkit";





const PizzaCart = createSlice({
    name: "PizzaCart",
    initialState: {
        items: [],
    },
    reducers: {

        addToCart: (state, action) => {
            const { pizzaName, size, crust, toppings } = action.payload;

            const alreadyItem = state.items.find(
                (item) =>
                    item.pizzaName === pizzaName &&
                    item.size === size &&
                    item.crust === crust &&
                    JSON.stringify(item.toppings) === JSON.stringify(toppings)
            );
            if (alreadyItem) {
                alreadyItem.qty += 1;
            } else {
                state.items.push({ ...action.payload, qty: 1 });
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        PizzaCartIncrement: (state, action) => {
            const item = state.items.find(
                (i) =>
                    i.pizzaName === action.payload.pizzaName &&
                    i.size === action.payload.size &&
                    i.crust === action.payload.crust &&
                    i.toppings === action.payload.toppings
            );

            if (item) {
                item.qty += 1;
            }
        },

        PizzaCartDecrement: (state, action) => {
            const index = state.items.findIndex(
                (i) =>
                    i.pizzaName === action.payload.pizzaName &&
                    i.size === action.payload.size &&
                    i.crust === action.payload.crust &&
                    i.toppings === action.payload.toppings
            );

            if (index !== -1) {
                if (state.items[index].qty > 1) {
                    state.items[index].qty -= 1;
                } else {
                    state.items.splice(index, 1);
                }
            }
        },




    },
});


export const { addToCart, removeFromCart, PizzaCartIncrement, PizzaCartDecrement } = PizzaCart.actions
export default PizzaCart.reducer;