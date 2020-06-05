import actionsType from '../constants/actionTypes';

export function addUser(userData) {
  return { type: actionsType.ADD_USER, payload: userData }
}

export function signinUser(userData) {
  return { type: actionsType.SIGNIN_USER, payload: userData }
};
