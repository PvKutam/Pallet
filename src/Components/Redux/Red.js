  
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
      textColor: 'white',
      backgroundColor: 'white',
      primaryColor: 'blue',
      secondaryColor: 'green',
      accentColor: 'orange',
    },
    reducers: {
      setTextColor: (state, action) => {
        state.textColor = action.payload;
      },
      setBackgroundColor: (state, action) => {
        state.backgroundColor = action.payload;
      },
      setPrimaryColor: (state, action) => {
        state.primaryColor = action.payload;
      },
      setSecondaryColor: (state, action) => {
        state.secondaryColor = action.payload;
      },
      setAccentColor: (state, action) => {
        state.accentColor = action.payload;
      },
    },
  });
  
  export const {
    setTextColor,
    setBackgroundColor,
    setPrimaryColor,
    setSecondaryColor,
    setAccentColor,
  } = appSlice.actions;
  
  export default appSlice.reducer;
  