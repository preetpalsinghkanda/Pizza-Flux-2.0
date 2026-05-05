import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        phoneNo: "",
        pass: "",
        confirmPass: "",
        terms: false,
        errors: {},
        loading: false,
        success: false,
        isAuth : false 
    },

    reducers: {

        setField: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setSuccess: (state, action) => {
            state.success = action.payload;
        },
        setErrors : (state , action) =>{
            state.errors = action.payload;
        },

        loginSuccess : (state) => {
            state.isAuth = true ; 
        },
        logout : (state) =>{
            state.isAuth = false
        }


    }
})


export const {  setField ,setLoading , setErrors,  setSuccess , loginSuccess ,logout } = userSlice.actions
export default userSlice.reducer ;