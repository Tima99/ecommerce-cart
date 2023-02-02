import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const REQ = {
    PENDING: 'pending',
    REJECT: 'r',
    RESOLVED: 'resolve'
}

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        copy: [],
        status: REQ.PENDING
    },
    reducers: {
        addProducts(state, action){
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = REQ.PENDING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = REQ.RESOLVED
                state.data = action.payload
                state.copy = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = REQ.REJECT
                
            })
    }
})

export const fetchProducts = createAsyncThunk('/products/fetch', async() => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data
})

export default productSlice.reducer
export const { addProducts } = productSlice.actions