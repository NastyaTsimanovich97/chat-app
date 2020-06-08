import actionsType from '../constants/actionTypes';

export function signupUser(userData) {
  return { type: actionsType.SIGNUP_USER, payload: userData }
}

export function signinUser(userData) {
  return {type: actionsType.SIGNIN_USER, payload: userData}
}
