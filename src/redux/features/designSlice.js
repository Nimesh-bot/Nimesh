import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    designs: [],
    design_description: {
        _id: '',
        name: '',
        description: '',
        gallery: [],
        tools: [],
        url: '',
    },
    isFetching: false,
    error: false,
}

const designSlice = createSlice({
    name: 'designs',
    initialState,
    reducers: {
        getDesignStart: (state) => {
            state.isFetching = true;
        },
        getDesignSuccess: (state, action) => {
            state.isFetching = false;
            state.designs = action.payload;
            state.error = false;
        },
        getDesignDescriptionSuccess: (state, action) => {
            state.isFetching = false;
            state.design_description = action.payload;
            state.error = false;
        },
        getDesignFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { getDesignStart, getDesignSuccess, getDesignFailure, getDesignDescriptionSuccess } = designSlice.actions;
export default designSlice.reducer;
