import actionsType from '../constants/actionTypes';

export default function addUser(userData) {
  return { type: actionsType.ADD_USER, payload: userData }
};
