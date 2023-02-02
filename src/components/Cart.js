import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { active } from "../store/activeNav";
import { removeCart } from "../store/cartSlice";
import ProductCard from "./ProductCard";
import RemoveCart from "./RemoveCart";

const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(active(2));
  }, []);

  function btnHandler(e, product) {
    const card = e.target.parentElement.parentElement.parentElement;
    card.classList.add("remove-card-animate");

    card.addEventListener("animationend", () => {
      dispatch(removeCart(product));
    });
  }

  if (carts.length <= 0)
    return (
      <div className="text-center py-6 text-2xl text-slate-800 block capitalize font-bold">
        No item in cart
      </div>
    );

  return (
    <>
      <div className="sticky top-16 text-center">
        <div className="inline-flex justify-center gap-2 px-2 py-1 bg-white shadow-slate-400 rounded-lg shadow-md">
          <span className="font-medium">Total</span> 
          <span>:</span>
          <span className="font-medium">$ {carts.reduce((a, c) => a + c.price, 0)}</span>
        </div>
      </div>
      <div className="grid w-full grid-container py-2 _desktop:place-items-center overflow-hidden">
        {carts.map((cart) => {
          return (
            <ProductCard product={cart} key={cart.id}>
              <RemoveCart btnHandler={btnHandler} />
            </ProductCard>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
