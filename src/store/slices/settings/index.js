import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
    sideBarCollapsed: false,
    navCollapsed: false,
    notification: false
}

// Delivery Changes slice
export const slice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        sideBarCollapsed: (state) => {
            state.sideBarCollapsed = !state.sideBarCollapsed;
            return state;
        },
        navCollapsed: (state) => {
            state.navCollapsed = !state.navCollapsed;
            return state;
        },
        notificationCollapsed: (state) => {
            state.notification = !state.notification;
            return state
        }
    }
})

// Other code such as selectors can use the imported `RootState` type
export default slice.reducer