import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import orderReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cartItems: cartSlice,
    orders:orderReducer
  },
});

export default store;
