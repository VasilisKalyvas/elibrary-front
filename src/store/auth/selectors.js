import { createSelector } from "@reduxjs/toolkit";

const selectAuthState = (state) => state.auth;

export const selectCurrentUser = createSelector(
    [selectAuthState],
    (state) => state.auth.user
);

export const selectCurrentUserIsLoggedIn = createSelector(
    [selectAuthState],
    (state) => state.auth.user.token
);

export const selectCurrentUserIsAdmin = createSelector(
    [selectAuthState],
    (state) => state.auth.user.role === 'admin'
);

export const selectAuthIsLoading = createSelector(
    [selectAuthState],
    (state) => state.auth.isLoading
);

export const selectAdminUsersList = createSelector(
    [selectAuthState],
    (state) => state.auth.admin.users.list
);

export const selectAdminUsersIsLoading = createSelector(
    [selectAuthState],
    (state) => state.auth.admin.users.isLoading
);

export const selectAdminRentsList = createSelector(
    [selectAuthState],
    (state) => state.auth.admin.rents.list
);

export const selectAdminRentsListFilters = createSelector(
    [selectAuthState],
    (state) => state.auth.admin.rents.filters
);

export const selectAdminRentsIsLoading = createSelector(
    [selectAuthState],
    (state) => state.auth.admin.rents.isLoading
);

export const selectAdminRentById = createSelector(
    [selectAdminRentsList],
    (rents) => ({id}) =>{
      return rents.find((rent) => rent?.id === id )}
);

export const selectAdminBooksList = createSelector(
    [selectAuthState],
    (state) => state.auth.admin.books.list
);

export const selectAdminBooksListFilters = createSelector(
    [selectAuthState],
    (state) => state.auth.admin.books.filters
);

export const selectAdminBooksIsLoading = createSelector(
    [selectAuthState],
    (state) => state.auth.admin.books.isLoading
);
