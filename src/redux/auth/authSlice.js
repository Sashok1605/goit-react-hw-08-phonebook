import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;



// import { createAction } from "@reduxjs/toolkit";

// export const registerContactsRequest = createAction('/contacts/registerContactsRequest');
// export const registerContactsSuccess = createAction('/contacts/registerContactsSuccess');
// export const registerContactsError = createAction('/contacts/registerContactsError');

// export const logInContactsRequest = createAction('/contacts/logInContactsRequest');
// export const logInContactsSuccess = createAction('/contacts/logInContactsSuccess');
// export const logInContactsError = createAction('/contacts/logInContactsError');

// export const logOutContactsRequest = createAction('/contacts/logOutContactsRequest');
// export const logOutContactsSuccess = createAction('/contacts/logOutContactsSuccess');
// export const logOutContactsError = createAction('/contacts/logOutContactsError');