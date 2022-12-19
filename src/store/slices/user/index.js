import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
    user: null,
    teamId: null,
    currentUser: null
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
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
            return state
        },
        setTeamId: (state, action) => {
            state.teamId = action.payload;
            return state
        },
        resetUser: () => initialState
    }
})

// Other code such as selectors can use the imported `RootState` type
export default slice.reducer