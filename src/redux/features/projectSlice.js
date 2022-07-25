import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: [],
    isFetching: false,
    error: false,
}

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getProjectStart: (state) => {
            state.isFetching = true;
        },
        getProjectSuccess: (state, action) => {
            state.isFetching = false;
            state.projects = action.payload;
        },
        getProjectFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { getProjectStart, getProjectSuccess, getProjectFailure } = projectSlice.actions;
export default projectSlice.reducer;
