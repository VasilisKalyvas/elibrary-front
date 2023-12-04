import { createSlice } from '@reduxjs/toolkit';
import { login, register, getAllUsers, getAllRents } from './actions';

const initialState = {
  auth: {
    admin: {
      users: {
        list: [],
        isLoading: false
      },
      books: {
        list: [],
        isLoading: false
      },
      rents: {
        list: [],
        isLoading: false
      }
    },
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

    [getAllUsers.fulfilled] :  (state, action) => {
      state.auth.admin.users.list = action.payload;
      state.auth.admin.users.isLoading = false;
    },

    [getAllUsers.pending] :  (state) => {
      state.auth.admin.users.isLoading = true;
    },

    [getAllUsers.rejected]:  (state) => {
      state.auth.admin.users.isLoading = false;
    },
    [getAllRents.fulfilled] :  (state, action) => {
      state.auth.admin.rents.list = action.payload;
      state.auth.admin.rents.isLoading = false;
    },

    [getAllRents.pending] :  (state) => {
      state.auth.admin.rents.isLoading = true;
    },

    [getAllRents.rejected]:  (state) => {
      state.auth.admin.rents.isLoading = false;
    },  
  }
});

export const { logout } = authSlices.actions;
export default authSlices.reducer;