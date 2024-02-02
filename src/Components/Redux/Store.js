
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import colorReducer from "./Red";
import sizeFontReducer from "./Size"; 

const rootReducer = combineReducers({
  color: colorReducer,
  sizeFont: sizeFontReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
});
