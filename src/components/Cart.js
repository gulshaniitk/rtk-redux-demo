import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart, resetCart, updateCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../store/orderSlice";


const Cart = () => {

  const [orderStr,setOrderStr]=useState("Place Order");
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const cartItems = useSelector((state) => state.cartItems);
  const total = cartItems.reduce((total, item) => total + item.product.price*item.quantity, 0);
  


  return (
    <div className="p-4 border">
      <button  className="px-2 py-1 mt-2 text-l text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={()=>navigate(-1)}>Back</button>
      <h2 className="mb-4 text-lg font-semibold">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item,idx) => (
            <li key={item.product.id} className="mb-2">
              <div>
                <span className="font-semibold">{item.product.title}</span> : $
                {item.product.price.toFixed(2)}
              </div>
              <div className="flex items-center">
                <span className="">Qty : {item.quantity}</span>
                <button className="p-2"  onClick={()=>{dispatch(decreaseQuantity(idx))}}>-</button>
                <button onClick={()=>{dispatch(increaseQuantity(idx))}}>+</button>
                <button
                  className="text-red-500 hover:text-red-700 p-2"
                  onClick={() => dispatch(removeFromCart(item.product.id))}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
          <li className="mt-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </li>
        </ul>
      )}
      <div className="flex flex-col items-center ">
      <button  onClick={()=>{dispatch(addOrder(cartItems));dispatch(resetCart());cartItems.length && setOrderStr("Order placed successfully")} }  className="px-2 py-1 mt-2 text-l text-white bg-green-500 rounded-md hover:bg-blue-600">{orderStr}</button>
      </div>
      
    </div>
  );
};

export default Cart;
