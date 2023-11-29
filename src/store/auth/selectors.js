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

export const selectAuthIsLoading = createSelector(
    [selectAuthState],
    (state) => state.auth.isLoading
);