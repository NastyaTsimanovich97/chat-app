import { createSelector } from 'reselect';

const getUsersLogin = (state) => state.users;

const userLogin = createSelector(
  [getUsersLogin],
  (users) => users.reduce((prev, current) => [...prev, current.login], []),
);

export default userLogin;
