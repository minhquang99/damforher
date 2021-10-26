import { createSlice } from "@reduxjs/toolkit"

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    value: items

}

export const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const duplicate = state.value.filter(e => e.slug === newItem.slug && e.color === newItem.color && e.size === newItem.size)
            if (duplicate.length > 0) {
                state.value = state.value.filter(e => e.slug !== newItem.slug || e.color !== newItem.color || e.size !== newItem.size)
                state.value = [...state.value, {
                    id: duplicate[0].id,
                    slug: newItem.slug,
                    color: newItem.color,
                    size: newItem.size,
                    price: newItem.price,
                    quantity: newItem.quantity + duplicate[0].quantity
                }]
            } else {
                state.value = [...state.value, {
                    ...action.payload,
                    id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1
                }]
            }
            localStorage.setItem('cartItems', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))
        },
        updateItem: () => { },
        removeItem: () => { }
    }
})

export const selectCartItems = state => state.cartItems.value;

export const { addItem, updateItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;