import { createSelector } from '@reduxjs/toolkit';

const selectBooksState = (state) => state.books;

export const selectRecentBooks = createSelector(
    [selectBooksState],
    (state) => state.recentBooks?.books
);

export const selectRecentBooksisLoading = createSelector(
    [selectBooksState],
    (state) => state.recentBooks?.isLoading
);

export const selectBooks = createSelector(
    [selectBooksState],
    (state) => state.bookslist?.books
);

export const selectBooksisLoading = createSelector(
    [selectBooksState],
    (state) => state.bookslist?.isLoading
);

export const selectCategoriesList = createSelector(
    [selectBooksState],
    (state) => state.categories?.list
);

export const selectCategoriesisLoading = createSelector(
    [selectBooksState],
    (state) => state.categories?.isLoading
);

export const selectAuthorsList = createSelector(
    [selectBooksState],
    (state) => state.authors?.list
);

export const selectAuthorsisLoading = createSelector(
    [selectBooksState],
    (state) => state.authors?.isLoading
);

export const selectBooksListFilters = createSelector(
    [selectBooksState],
    (state) => state.bookslist.filters
);

export const selectSelectedBook = createSelector(
    [selectBooksState],
    (state) => state.bookslist.selectedBook
);