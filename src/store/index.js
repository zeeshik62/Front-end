import { configureStore } from '@reduxjs/toolkit'
import { projectsReducer, settingsReducer, userReducer } from './slices'

const store = configureStore({
    reducer: {
        projects: projectsReducer,
        settings: settingsReducer,
        user: userReducer
    },
    devTools: true,
});

export default store;