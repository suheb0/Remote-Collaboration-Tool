import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  userInfo: {
    uid:'',
    name:'',
    email:'',

  },
  isDarkTheme: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.isDarkTheme = action.payload.isDarkTheme;
    },
    setUser: (state,action) => {
      console.log('Action Payload:', action.payload); // Add this to inspect the payload
      state.userInfo = action.payload;  
      console.log('Userinfo',state.userInfo)
    },

  },
});


export const { setUser, changeTheme } = authSlice.actions;