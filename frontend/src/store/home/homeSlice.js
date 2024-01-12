import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fragment: ""
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setFragements: (state, action) => {
            state.fragment = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer