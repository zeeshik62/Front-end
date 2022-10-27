import { configureStore } from '@reduxjs/toolkit'
import { settingsReducer, userReducer } from './slices'

const store = configureStore({
    reducer: {
        settings: settingsReducer,
        user: userReducer
    },
    devTools: true,
});

export default store;