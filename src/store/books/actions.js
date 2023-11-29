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