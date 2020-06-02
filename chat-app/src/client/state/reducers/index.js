import actionsType from '../constants/actionTypes';

const initialState = {
  user: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === actionsType.ADD_USER_SUCCEEDED) {
    const user = {...state.user, token: action.payload.token};
    return {...state, user };
  }
  if (action.type === actionsType.ADD_USER_FAILED) {
   console.log(action.error);
  }
  return state;
}

export default rootReducer;
