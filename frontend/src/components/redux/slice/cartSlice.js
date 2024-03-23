import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {

        addToCart: (state, action) => {
            // console.log('Payload received:', action.payload); // Log the payload here
            const itemInCart = state.cart.find((item) => item.id === action.payload.id)
            if(itemInCart){
                itemInCart.quantity++

            } else {
                state.cart.push({ ...action.payload, quantity: 1})
            }
            
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload)
            item.quantity++
        },
        decrementQuantity: (state, action) => {
            const itemId = action.payload;
            const updatedCart = state.cart.map(item => {
                if (item.id === itemId) {
                    const newQuantity = Math.max(item.quantity - 1, 0); 
                    return {
                        ...item,
                        quantity: newQuantity
                    };
                }
                return item;
            });
        
            const filteredCart = updatedCart.filter(item => item.quantity > 0);
        
            return {
                ...state,
                cart: filteredCart
            }
        },
        removeItem: (state, action) => {
            const removeItemCart = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItemCart
        }
    }
})


export const cartReducer = cartSlice.reducer

export const {
    addToCart, 
    incrementQuantity,
    decrementQuantity,
    removeItem
} = cartSlice.actions