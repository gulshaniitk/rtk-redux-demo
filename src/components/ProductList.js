import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  // console.log(store.getState());

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
