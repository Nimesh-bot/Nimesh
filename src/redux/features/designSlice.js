import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    designs: [],
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
        },
        getDesignFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { getDesignStart, getDesignSuccess, getDesignFailure } = designSlice.actions;
export default designSlice.reducer;
