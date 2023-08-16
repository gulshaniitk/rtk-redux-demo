import { createSlice } from "@reduxjs/toolkit";

const orderSlice=createSlice({
    name:"orders",
    initialState:[],
    reducers:{
        addOrder:(state,action)=>{
            // console.log(action.payload.length);
            if(action.payload.length==0) return [...state];
            return [...state,action.payload]
        }
    }
})

export const {addOrder}=orderSlice.actions

export default orderSlice.reducer