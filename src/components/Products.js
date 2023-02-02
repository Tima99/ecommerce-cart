import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/cartSlice";
import { addProducts, fetchProducts, REQ } from "../store/productSlice";
import { active } from "../store/activeNav";
import ProductCard from "./ProductCard";
import { AddCartButton } from "./AddCartButton";

const Products = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);
  const { data: products, copy: productscopy , status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(active(1));
    if (status !== REQ.PENDING) dispatch(addProducts(productscopy));
    else
      dispatch(fetchProducts());
  }, []);

  function btnHandeler(e, { ...product }) {
    const containRect = document
      .getElementById("cart-preview")
      .getBoundingClientRect();

    product.click = {
      top: e.clientY - 56 + "px",
      right: containRect.left - e.clientX + 10 + "px",
    };
    dispatch(addCart(product));
  }

  if (status == REQ.PENDING)
    return (
      <h2 className="w-full text-center text-xl pt-4 font-semibold">
        Loading...
      </h2>
    );

  if(products?.length <= 0){
    return <div className="flex justify-center flex-1 py-5">
      <span className="font-bold">No Products Found</span>
    </div>
  }

  return (
    <div className="grid w-full grid-container py-2 _desktop:place-items-center overflow-hidden flex-1 mobile:place-items-center">
      {products?.map((product) => {
        const isCarted = carts.some((cart) => cart.id == product.id);

        return (
          <ProductCard product={product} key={product.id}>
            <AddCartButton btnHandler={btnHandeler} isCarted={isCarted} />
          </ProductCard>
        );
      })}
    </div>
  );
};

export default Products;
