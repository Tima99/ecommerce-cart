import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addCart(state, action){
            state.push(action.payload)
        },
        removeCart(state, action){
            const id = action.payload.id

            return state.filter( item => item.id !== id)
        }
    }
}) 

export const { addCart, removeCart } = cartSlice.actions
export default cartSlice.reducer