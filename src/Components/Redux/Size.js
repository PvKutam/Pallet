import { createSlice } from "@reduxjs/toolkit";

const sizeSlice= createSlice({
    name:"sizeFont",
    initialState:{
        Heading:"" ,
        Body:"",
    },
    reducers:{
        setHeadingFont: (state, action) => {
            return { ...state, Heading: action.payload };
          },
          
          setBodyFont: (state, action) => {
            return { ...state, Body: action.payload };
          },
    }
})

export const {
    setHeadingFont:HeadingFont,
    setBodyFont : BodyFont,
}=sizeSlice.actions



export const selectHeadingFont = (state) => state.sizeFont.Heading;
export const selectBodyFont = (state) => state.sizeFont.Body;


export default sizeSlice.reducer