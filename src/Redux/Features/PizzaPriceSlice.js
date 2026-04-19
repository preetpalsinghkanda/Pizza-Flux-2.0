import { createSlice } from "@reduxjs/toolkit";


const PizzaPriceSlice = createSlice({





    name: 'PizzaPrice',
    initialState: {
        basePrice: 0,
        sizePrice: 0,
        crustPrice: 0,
        toppingsPrice: 0,
        pizzaPrice: 0,
    },

    reducers: {

        setBasePrice: (state, action) => {
            state.basePrice = action.payload;
        },
        setSizePrice: (state, action) => {
            state.sizePrice = action.payload;
        },
        setCrustPrice: (state, action) => {
            state.crustPrice = action.payload;
        },
        setToppingsPrice: (state, action) => {
            state.toppingsPrice = action.payload;
        },
        


    }
})

export const { setBasePrice, setSizePrice, setCrustPrice, setToppingsPrice ,} = PizzaPriceSlice.actions;
export default PizzaPriceSlice.reducer;