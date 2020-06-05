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
      const user = {user: { token: action.payload.body.token }};
      return {...state, user};
    }
    case actionsType.SIGNUP_USER_FAIL : {
      const error = {error: {
          status: true,
          message: action.payload
        }};
      return {...state, error};
    }
  }
  return state;
}

export default rootReducer;
