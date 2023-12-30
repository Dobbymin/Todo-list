import { configureStore } from '@reduxjs/toolkit';

import registerSlice from './register-slice';
import loginSlice from './login-slice';

export const store = configureStore({
    reducer: {
        register: registerSlice.reducer,
        login: loginSlice.reducer,
    },
});
