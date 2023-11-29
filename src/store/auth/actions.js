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
