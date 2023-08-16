import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state,action.payload];
    },
    increaseQuantity:(state,action)=>{
      const idx=action.payload;
      state[idx].quantity+=1;
    },
    decreaseQuantity:(state,action)=>{
      const idx=action.payload;
      if(state[idx].quantity>0)
       state[idx].quantity-=1;
    },
    resetCart:(state,action)=>{

      return [];
    },
    removeFromCart: (state, action) => {
      return state.filter((cartItems) => cartItems.product.id !== action.payload); // new array []
    },
  },
});

export const { addToCart, removeFromCart,resetCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
