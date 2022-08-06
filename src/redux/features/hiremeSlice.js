import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contact: {},
    isFetching: false,
    error: false,
}

const hiremeSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        postContactStart: (state) => {
            state.isFetching = true;
        },
        postContactSuccess: (state, action) => {
            state.isFetching = false;
            state.contact = action.payload;
            state.error = false;
        },
        postContactFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { postContactStart, postContactSuccess, postContactFailure } = hiremeSlice.actions;
export default hiremeSlice.reducer;
