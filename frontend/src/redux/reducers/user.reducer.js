import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        GET_USER_REQUEST: (state) => {
            state.loading = true;
        },
        GET_USER_SUCCESS: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        GET_USER_FAILURE: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } = userSlice.actions

export default userSlice.reducer;