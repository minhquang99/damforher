import { createSlice } from "@reduxjs/toolkit"

const items = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : []

const initialState = {
    value: items

}

export const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addItem: (state, action) => { },
        updateItem: () => { },
        removeItem: () => { }
    }
})

export const selectCartItems = state => state.cartItems.value;

export const { addItem, updateItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;