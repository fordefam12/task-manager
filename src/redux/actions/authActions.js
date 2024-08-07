// src/redux/actions/authActions.js
<<<<<<< HEAD
export const loginUser = (credentials) => ({
  type: 'LOGIN_REQUEST',
  payload: credentials,
});
=======
import axios from 'axios';

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};
>>>>>>> a23812e (Normalize all line endings)
