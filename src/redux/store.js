import { configureStore } from "@reduxjs/toolkit"
import cartItemsReducer from "./shopping-cart/cartSlice"

export const store = configureStore({
    reducer: {
        cartItems: cartItemsReducer
    }
})