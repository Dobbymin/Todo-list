import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
    name: 'Register-slice',
    initialState: {
        signin: {
            status: null,
            token: null,
        },
        signup: {
            status: null,
        },
    },
    reducers: {
        setSignIn: (state, action) => {
            state.signin.status = action.payload.status;
            state.signin.token = action.payload.token;
        },
        setSignUp: (state, action) => {
            state.signup.status = action.payload.status;
        },
    },
});

export const registerActions = registerSlice.actions;

export default registerSlice;
