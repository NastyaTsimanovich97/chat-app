import actionsType from '../constants/actionTypes';

const initialState = {
  user: {
    token: '',
  },
  error: {
    status: false,
    message: '',
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.SIGNUP_USER_SUCCESS : {
      const user = {token: action.payload.body.token };
      return {...state, user};
    }
    case actionsType.SIGNUP_USER_FAIL : {
      const error = {
          status: true,
          message: action.payload
        };
      return {...state, error};
    }
  }
  return state;
}

export default rootReducer;
