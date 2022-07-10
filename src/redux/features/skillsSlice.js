import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    skills: [],
    isFetching: false,
    error: false,
}

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        getSkillsStart: (state) => {
            state.isFetching = true;
        },
        getSkillsSuccess: (state, action) => {
            state.isFetching = false;
            state.skills = action.payload;
        },
        getSkillsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { getSkillsStart, getSkillsSuccess, getSkillsFailure } = skillsSlice.actions;
export default skillsSlice.reducer;
