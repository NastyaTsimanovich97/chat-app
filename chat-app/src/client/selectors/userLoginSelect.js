import { createSelector } from 'reselect';

const getUsersLogin = (state) => state.users;

const userLogin = createSelector(
  [getUsersLogin],
  (users) => {  
    return users.reduce((prev, current) => {
      return [...prev, current.login];
    }, [])
  }
)

export default userLogin;
