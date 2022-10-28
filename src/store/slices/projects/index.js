import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
    allProjects: [],
}

// Delivery Changes slice
export const slice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.allProjects = action.payload
            return state;
        },
        getProjects: (state) => {
            return state;
        },
    }
})

// Other code such as selectors can use the imported `RootState` type
export default slice.reducer