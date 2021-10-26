import { configureStore } from "@reduxjs/toolkit"
import cartItemsReducer from "./shopping-cart/cartSlice"
import productModalReducer from "./productModal/productModalSlice"

export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
        cartItems: cartItemsReducer
    }
})