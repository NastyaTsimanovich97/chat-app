import { createSelector } from 'reselect';

const getUsersLogin = (state) => state.users;

const userLogin = createSelector(
  [getUsersLogin],
  (users) => {
    const result = [];
    users.forEach(element => {
      result.push(element.login);
    });
    return result;
  }
)

export default userLogin;
