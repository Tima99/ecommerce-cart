import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import navImg from "../assets/images/menu-icon-24.png"


const Nav = () => {
  const carts = useSelector((state) => state.carts);
  const activeNav = useSelector((state) => state.activeNav);
  const {pathname} = useLocation()


  function removeElement(e) {
    e.target.style.display = "none";
  }

  return (
    <div className="flex py-4 px-2 text-sm bg-sky-600 text-white shadow-md shadow-slate-400 md:text-lg flex-wrap sticky top-0 z-10">

      <input type="checkbox" name="toggle-menu" id="toggle-menu" className="hidden"/>
      <label className="icon hidden mobile:block  mobile:mr-4" htmlFor="toggle-menu">
        <img src={navImg} alt="" width={'20px'}/>
      </label>
      
      <div className="menu flex gap-4 w-max mobile:flex-col">
        <Link to={'/'} className="link" id={activeNav == 1 ? "activeNav" : ''}>Home</Link>
        <Link to={'/cart'} className="link" id={activeNav == 2 ? "activeNav" : ''}>Cart</Link>
      </div>
      <div className="justify-self-end ml-auto pr-8">
        <span className="relative" id="cart-preview">
          Cart : {carts.length}
          {(carts[carts.length - 1]?.id && pathname === '/') && (
            <div
              className="animated-cart-product"
              onAnimationEnd={removeElement}
              key={carts[carts.length - 1].id}
              style={{ ...carts[carts.length - 1].click }}
            >
              <img src={carts[carts.length - 1].image} alt="" />
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default Nav;
