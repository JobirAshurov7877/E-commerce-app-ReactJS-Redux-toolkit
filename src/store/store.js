import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer  from './sidebarSlice' 
import categoryReducer from './categorySlice'
import productReducer from './producrSlice'
import cartReducer from './cartSlice'
import searchReduser from './searchSlice'

const  store = configureStore({
     reducer: {
          sidebar: sidebarReducer,
          category: categoryReducer,
          product: productReducer,
          cart: cartReducer,
          search: searchReduser,
     }
})
export default store