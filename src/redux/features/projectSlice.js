import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: [],
    project_description: {
        _id: '',
        name: '',
        description: '',
        features: [],
        gallery: [],
        techStack: [],
        team: [],
        url: '',
    },
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
            state.error = false;
        },
        getDescriptionSuccess: (state, action) => {
            state.isFetching = false;
            state.project_description = action.payload;
            state.error = false;
        },
        getProjectFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { getProjectStart, getProjectSuccess, getProjectFailure, getDescriptionSuccess } = projectSlice.actions;
export default projectSlice.reducer;
