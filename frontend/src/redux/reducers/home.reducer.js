import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        GET_PROJECTS_REQUEST: (state) => {
            state.loading = true;
        },
        GET_PROJECTS_SUCCESS: (state, action) => {
            state.loading = false;
            state.projects = action.payload;
        },
        GET_PROJECTS_FAILURE: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE } = homeSlice.actions

export default homeSlice.reducer;