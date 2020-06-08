export const errors = {
  SERVER_ERROR: 'SERVER_ERROR',
  EMAIL_CONFLICT: 'EMAIL_CONFLICT',
  NAME_ERROR: 'NAME_ERROR',
  AUTH_CONFLICT: 'AUTH_CONFLICT',
};

export const errorCodes = {
  BAD_REQUEST: 400,
  authConflict: 1,
  emailConflict: 2,
  nameConflict: 3,
  default: 0,
};

export const errorCodesMap = {
  [errorCodes.emailConflict]: errors.EMAIL_CONFLICT,
  [errorCodes.nameConflict]: errors.NAME_ERROR,
  [errorCodes.authConflict]: errors.AUTH_CONFLICT,
};
