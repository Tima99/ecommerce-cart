import {createSlice} from "@reduxjs/toolkit"

const activeNavSlice = createSlice({
    name: "activeNav",
    initialState: 1,
    reducers: {
        active(state, action){
            state = action.payload
            return state
        }
    }
}) 

export const { active } = activeNavSlice.actions
export default activeNavSlice.reducer