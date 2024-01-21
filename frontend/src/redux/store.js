import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/user.reducer'
import homeSlice from './reducers/home.reducer'

export const store = configureStore({
    reducer: {
        user: userSlice,
        home: homeSlice,
    },
})