export const serverErrorReg = '^5';

export const errorCodes = {
  BAD_REQUEST: 400,
  authConflict: 1,
  emailConflict: 2,
  nameConflict: 3,
};

export const emailReg = '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$';

export const passwordReg = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{3,}$';

export const minNameLength = 3;
