import { createSlice } from '@reduxjs/toolkit';
import { getRecentBooks, getBooks, getCategories, getAuthors, getBookById } from './actions';

const initialState = {
  categories: {
    list: [],
    isLoading: false
  },
  authors: {
    list: [],
    isLoading: false
  },
  recentBooks: {
    books: [],
    isLoading : false,
  },
  bookslist:{
    selectedBook: {},
    filters: [],
    books: [],
    isLoading : false,
  }
};

const booksSlices = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.bookslist.filters = action.payload
    },
    clearSelectedBook: (state, action) => {
      state.bookslist.selectedBook = {}
    },
  },
  extraReducers:{
    
    // Recent Books
    [getRecentBooks.fulfilled] :  (state, action) => {
        state.recentBooks.books = action.payload;
        state.recentBooks.isLoading = false;
    },

    [getRecentBooks.pending] :  (state) => {
        state.recentBooks.isLoading = true;
    },

    [getRecentBooks.rejected]:  (state) => {
        state.recentBooks.isLoading = false;
    },

    //Get selected Book
    [getBookById.fulfilled] :  (state, action) => {
      state.bookslist.selectedBook = action.payload;
      state.bookslist.isLoading = false;
    },

    [getBookById.pending] :  (state) => {
        state.bookslist.isLoading = true;
    },

    [getBookById.rejected]:  (state) => {
        state.bookslist.isLoading = false;
    },

    // Recent Books
    [getBooks.fulfilled] :  (state, action) => {
        state.bookslist.books = action.payload.data;
        state.bookslist.isLoading = false;
    },

    [getBooks.pending] :  (state) => {
        state.bookslist.isLoading = true;
    },

    [getBooks.rejected]:  (state) => {
        state.bookslist.isLoading = false;
    },

    //Categories
    [getCategories.fulfilled] :  (state, action) => {
      state.categories.list = action.payload;
      state.categories.isLoading = false;
    },

    [getCategories.pending] :  (state) => {
        state.categories.isLoading = true;
    },

    [getCategories.rejected]:  (state) => {
        state.categories.isLoading = false;
    },

    //Authors
    [getAuthors.fulfilled] :  (state, action) => {
      state.authors.list = action.payload;
      state.authors.isLoading = false;
    },

    [getAuthors.pending] :  (state) => {
        state.authors.isLoading = true;
    },

    [getAuthors.rejected]:  (state) => {
        state.authors.isLoading = false;
    },
  }
});

export const { setFilters, clearSelectedBook } = booksSlices.actions;
export default booksSlices.reducer;