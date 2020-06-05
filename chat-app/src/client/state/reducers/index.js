import actionsType from '../constants/actionTypes';

const initialState = {
  user: {},
  error: {
    status: false,
    message: '',
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.SIGNUP_USER_SUCCESS : {
      const user = { token: action.payload.body.token };
      const error = { status: false, message: '' };
      return {...state, user, error};
    }
    case actionsType.SIGNUP_USER_FAIL : {
      const user = { token: '' };
      const error = {
          status: true,
          message: action.payload
      };
      return {...state, user, error};
    }
    case actionsType.SIGNIN_USER_SUCCESS : {
      const user = { token: action.payload.body.token };
      const error = { status: false, message: '' };
      return {...state, user, error};
    }
    case actionsType.SIGNIN_USER_FAIL : {
      const user = { token: '' };
      const error = {
          status: true,
          message: action.payload
      };
      return {...state, user, error };
    }
  }
  return state;
}

export default rootReducer;
