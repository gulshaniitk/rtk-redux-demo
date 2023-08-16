import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";
import { fetchProducts, setProducts,filterProducts} from "./store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "./store/store";

function App() {
 
  const dispatch = useDispatch();
  const navigate=useNavigate();
 const [minPrice,setMinPrice]=useState(0);
 const [maxPrice,setMaxPrice]=useState(10000);
 const [search,setSearch]=useState("");

  useEffect(() => {
    dispatch(fetchProducts({'min':minPrice,'max':maxPrice,'str':search}));

  }, [search,minPrice,maxPrice]);



  return (
    <div className="flex">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex justify-between">
          <h1 className="mb-4 text-2xl font-semibold">Products Page</h1>
          <button  className="px-2 py-1 m-2 text-l text-white bg-green-500 rounded-md hover:bg-blue-600" onClick={()=>navigate('/cart')}>My Cart</button>
          <button  className="px-2 py-1 m-2 text-l text-white bg-green-500 rounded-md hover:bg-blue-600" onClick={()=>navigate('/orders')}>My Orders</button>
          <div className="relative my-2 mr-6">
            <input
              type="search"
              className="px-4 py-1 border-0 rounded shadow bg-purple-white"
              placeholder="Search by name..."
              onChange={(e)=>{setSearch(e.target.value)}}
              value={search}
            />
          </div>
          

        <div >
        <h2 className="text-center">Filter by Price</h2>
        <hr/>
        <div className="flex p-2 ">
           <div> 
            <label>Min price: $</label>
            <input type="number" className="w-20" min="0" onChange={(e)=>{ setMinPrice(e.target.value)}}  value={minPrice} />
            </div>
           <div>
            <label>Max price: $</label>
            <input type="number"  className="w-20" min="0" onChange={(e)=>{ setMaxPrice(e.target.value)}} value={maxPrice} />
            </div>
           
           
      </div>
    </div>

        
        </div>
        <ProductList />
      </div>
      {/* <div className="sticky top-0 w-[30%] bg-gray-100 p-4 -webkit-sticky max-h-[100vh]  overflow-y-auto  no-scrollbar">
        <Cart />
      </div> */}
    </div>
  );
}

export default App;
