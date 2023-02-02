import React from 'react'
import { Outlet } from 'react-router-dom'
import Sort from "../components/Sort";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className='flex mobile:flex-col relative ' id="products--container">
        <Sort ></Sort>
        <Products />
    </div>
  )
}

export default Home