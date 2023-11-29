import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './actions';

const initialState = {
  auth: {
    user: {},
    isLoading: false,  
  }
};

const authSlices = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.auth.user = {}
    }
  },
  extraReducers:{
    [login.fulfilled] :  (state, action) => {
        state.auth.user = {...action.payload.user, token: action.payload.token};
        state.auth.isLoading = false;
    },

    [login.pending] :  (state) => {
        state.auth.isLoading = true;
    },

    [login.rejected]:  (state) => {
        state.auth.isLoading = false;
    }, 
    
    [register.fulfilled] :  (state, action) => {
        state.auth.user = {...action.payload.user, token: action.payload.token};
        state.auth.isLoading = false;
    },

    [register.pending] :  (state) => {
        state.auth.isLoading = true;
    },

    [register.rejected]:  (state) => {
        state.auth.isLoading = false;
    },
  }
});

export const { logout } = authSlices.actions;
export default authSlices.reducer;