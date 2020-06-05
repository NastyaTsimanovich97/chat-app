import actionsType from '../constants/actionTypes';

export default function signupUser(userData) {
  return { type: actionsType.SIGNUP_USER, payload: userData }
};
