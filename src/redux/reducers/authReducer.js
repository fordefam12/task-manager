import { LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_USER } from '../actions/authActions';

const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
