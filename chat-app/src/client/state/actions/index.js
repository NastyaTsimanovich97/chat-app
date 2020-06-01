import ADD_USER from '../constants/actionTypes';

export default function addUser(userData) {
  return { type: ADD_USER, payload: userData }
};