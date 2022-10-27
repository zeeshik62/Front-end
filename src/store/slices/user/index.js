import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
    user: null
}

// Delivery Changes slice
export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        user: (state, action) => {
            state.user = action.payload;
            return state;
        },
        currentUser: (state) => {
            return state.user
        },
        resetUser: () => initialState
    }
})

// Other code such as selectors can use the imported `RootState` type
export default slice.reducer