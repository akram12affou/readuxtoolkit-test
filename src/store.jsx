import { configureStore } from "@reduxjs/toolkit";
import reducer from './productSlice'
const store = configureStore({
    reducer,
})
export default store;