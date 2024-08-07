// src/redux/actions/authActions.js
export const loginUser = (credentials) => ({
  type: 'LOGIN_REQUEST',
  payload: credentials,
});