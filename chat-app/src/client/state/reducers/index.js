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
    case actionsType.ADD_USER_SUCCESS : {
      const user = {...state.user, user: { token: action.payload.body.token }};
      return {...state, user };
    }
    case actionsType.ADD_USER_FAIL : {
      const error = {...state.error, error: {
          status: true,
          message: action.payload
        }};
      return {...state, error };
    }
    case actionsType.SIGNIN_USER_SUCCESS : {
      const user = {...state.user, user: { token: action.payload.body.token }};
      return {...state, user };
    }
    case actionsType.SIGNIN_USER_FAIL : {
      const error = {...state.error, error: {
          status: true,
          message: action.payload
        }};
      return {...state, error };
    }
  }
  return state;
}

export default rootReducer;
