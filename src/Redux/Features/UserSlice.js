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
       
        loading: false,
        success: false,
        isAuth : false ,
        errors: {
      name: "",
      email: "",
      phoneNo: "",
      pass: "",
      confirmPass: "",
      terms: "",
    },
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
        },
            resetForm: (state) => {
      state.name = "";
      state.email = "";
      state.phoneNo = "";
      state.pass = "";
      state.confirmPass = "";
      state.terms = false;

      state.errors = {
        name: "",
        email: "",
        phoneNo: "",
        pass: "",
        confirmPass: "",
        terms: "",
      };
    },




    }
})


export const {  setField ,setLoading , setErrors,  setSuccess, resetForm, loginSuccess ,logout } = userSlice.actions
export default userSlice.reducer ;