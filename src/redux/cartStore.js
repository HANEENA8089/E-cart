import Wishlist from "../pages/Wishlist";
import productSlice from "./slice/productSlice";

import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slice/whishlistSlice";
import cartSlice from "./slice/cartSlice";
// const { configureStore } = require ("@reduxjs/toolkit");

const cartStore = configureStore({
    reducer:{
         productSlice,
         wishlistSlice,
         cartReducer:cartSlice
    }
})

export default cartStore