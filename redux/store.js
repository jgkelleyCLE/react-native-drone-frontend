import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { locationApi } from './locationApi'

export const store = configureStore({
    reducer: {
        [locationApi.reducerPath]: locationApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(locationApi.middleware)
})