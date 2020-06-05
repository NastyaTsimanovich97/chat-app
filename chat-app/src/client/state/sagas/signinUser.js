import { call, put, takeEvery } from 'redux-saga/effects';
import actionsType from '../constants/actionTypes';
import errors from '../constants/errors';
import { serverErrorReg, errorCodes } from '../../constants/constants';

function* fetchUser(action) {
  try {
    const signinResponse = yield call(() => fetch('/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'http://localhost:3000',
        },
        body: JSON.stringify(action.payload),
      }));
    const signinResponseJSON = yield signinResponse.json();
    if (signinResponseJSON.statusCode === errorCodes.BAD_REQUEST) {
      const errorCode = signinResponseJSON.body.code;
      if (errorCode === errorCodes.authConflict) {
        yield put({ type: actionsType.SIGNIN_USER_FAIL, payload: errors.AUTH_CONFLICT });
      }
    } else if (signinResponseJSON.statusCode.toString().match(serverErrorReg)) {
      yield put({ type: actionsType.SIGNIN_USER_FAIL, payload: errors.SERVER_ERROR });
    } else {
      yield put({ type: actionsType.SIGNIN_USER_SUCCESS, payload: signinResponseJSON });
    }
  } catch (e) {
    yield put({ type: actionsType.SIGNIN_USER_FAIL, error: e });
  }
}

export default function* watchSigninUser() {
  yield takeEvery(actionsType.SIGNIN_USER, fetchUser);
}
