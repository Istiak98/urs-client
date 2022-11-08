import { combineReducers } from "@reduxjs/toolkit";
import { versitySlice } from "../redux/versity/versitySlice";

export const rootReducer = combineReducers({
     versity: versitySlice.reducer,
});