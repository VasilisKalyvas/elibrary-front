import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async (params) => {

  try {
    let url = 'http://localhost:4000/api/auth/login'
    const response = await axios.post(url, params);

    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
});

export const register = createAsyncThunk(
    "auth/register",
    async (params) => {
  
    try {
      let url = 'http://localhost:4000/api/auth/register'
      const response = await axios.post(url, params);
  
      return response.data
    } catch (error) {
      console.log(error);
      throw error
    }
  });

  export const getAllUsers = createAsyncThunk(
    'admin/allUsers',
    async (params, { getState }) => {
      const { auth } = getState();
      const authToken = auth.auth.user.token;
  
      if (!authToken) {
        // Handle the case where authToken is not available
        return Promise.reject('Authentication token is missing.');
      }
  
      try {
        const url = 'http://localhost:4000/api/admin/users';
        const response = await axios.get(url, {
          headers: {
            Authorization: `${authToken}`, // Assuming it's a Bearer token
            'Content-Type': 'application/json',
          },
        });
  
        return response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
    }
  );

  export const getAllRents = createAsyncThunk(
    'admin/allrents',
    async (filters, { getState }) => {
      const { auth } = getState();
      const authToken = auth.auth.user.token;

      if (!authToken) {
        // Handle the case where authToken is not available
        return Promise.reject('Authentication token is missing.');
      }
      
      try {
        let url = 'http://localhost:4000/api/admin/allrents'
  
        if(filters?.length){
          url =  `${url}` + '?' + filters.map(filter => (
            '&' + `${filter?.key}` + `=` + `${filter.value}`
          )).join('')
        }
        
        const response = await axios.get(url, {
          headers: {
            Authorization: `${authToken}`, // Assuming it's a Bearer token
            'Content-Type': 'application/json',
          },
        });
  
        return response.data;
      } catch (error) {
        console.error('Error fetching rents:', error);
        throw error;
      }
    }
  );

  export const getAllBooks = createAsyncThunk(
    'admin/allbooks',
    async (filters, { getState }) => {
      const { auth } = getState();
      const authToken = auth.auth.user.token;

      if (!authToken) {
        // Handle the case where authToken is not available
        return Promise.reject('Authentication token is missing.');
      }

      try {
        let url = 'http://localhost:4000/api/admin/allbooks/?pageSize=0&sortBy=createdAt&sortOrder=desc'
  
        if(filters?.length){
          url =  `${url}` + '?' + filters.map(filter => (
            '&' + `${filter?.key}` + `=` + `${filter.value}`
          )).join('')
        }
        const response = await axios.get(url, {
          headers: {
            Authorization: `${authToken}`, // Assuming it's a Bearer token
            'Content-Type': 'application/json',
          },
        });
    
        return response.data
      } catch (error) {
        console.log(error);
        throw error
      }
  });