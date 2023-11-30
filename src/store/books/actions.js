import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRecentBooks = createAsyncThunk(
  "books/recent-books",
  async () => {
  try {
    let url = 'http://localhost:4000/api/books/recent'
    const response = await axios.get(url);

    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
});

export const getBooks = createAsyncThunk(
    "books/books",
    async (filters) => {
    try {
      let url = 'http://localhost:4000/api/books/'

      if(filters?.length){
        url =  `${url}` + '?' + filters.map(filter => (
          '&' + `${filter?.key}` + `=` + `${filter.value}`
        )).join('')
      }
      const response = await axios.get(url);
  
      return response.data
    } catch (error) {
      console.log(error);
      throw error
    }
});

export const getBookById = createAsyncThunk(
  "books/bookById",
  async (id) => {
  try {
    if(!id) return 

    let url = `http://localhost:4000/api/books/${id}`
    const response = await axios.get(url);

    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
});



export const getCategories = createAsyncThunk(
  "books/categories",
  async () => {
  try {
    let url = 'http://localhost:4000/api/category/'
    const response = await axios.get(url);

    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
});

export const getAuthors = createAsyncThunk(
  "books/authors",
  async () => {
  try {
    let url = 'http://localhost:4000/api/author/'
    const response = await axios.get(url);

    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
});

export const rentBook = createAsyncThunk(
  "books/rent",
  async (params, { getState }) => {
  try {
    const { auth } = getState();
      const authToken = auth.auth.user.token;

      if (!params || !authToken) {
        return;
      }

    let url = 'http://localhost:4000/api/books/book/rent'
    const response = await axios.post(url, params, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
});

export const returnBook = createAsyncThunk(
  "books/return",
  async (params, { getState }) => {
  try {
    const { auth } = getState();
      const authToken = auth.auth.user.token;
      const isAdmin =  auth.auth.user.role === 'admin';

      if (!params || !authToken || !isAdmin) {
        return;
      }

    let url = 'http://localhost:4000/api/books/book/return'
    const response = await axios.post(url, params, {
        headers: {
          Authorization: `${authToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }
});