import ADD_USER from 'client/state/constants/actionTypes';

const initialState = {
  users: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    const users = [...state.users, action.payload]
    return {...state, users };
  }
  return state;
}

export default rootReducer;