import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice"
import productsReducer from './productSlice'
import activeNavReducer from './activeNav'

const store = configureStore({
    reducer:{
        carts: cartReducer,
        products: productsReducer,
        activeNav: activeNavReducer
    }
})

export default store