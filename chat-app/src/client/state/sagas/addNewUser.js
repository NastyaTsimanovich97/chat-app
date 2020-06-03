import { call, put, takeEvery } from 'redux-saga/effects';
import actionsType from '../constants/actionTypes';
import errors from '../constants/errors';
import { serverErrorReg, errorCodes } from '../../constants/constants';

function* fetchUser(action) {
  try {
    const signupResponse = yield call(() => fetch('/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'http://localhost:3000',
        },
        body: JSON.stringify(action.payload),
      }));
    const signupResponseJSON = yield signupResponse.json();
    if (signupResponseJSON.statusCode === errorCodes.BAD_REQUEST) {
      const errorCode = signupResponseJSON.body.code;
      if (errorCode === errorCodes.emailConflict) {
        yield put({ type: actionsType.ADD_USER_FAIL, payload: errors.EMAIL_CONFLICT });
      }
      if (errorCode === errorCodes.nameConflict) {
        yield put({ type: actionsType.ADD_USER_FAIL, payload: errors.NAME_ERROR });
      }
    } else if (signupResponseJSON.statusCode.toString().match(serverErrorReg)) {
      yield put({ type: actionsType.ADD_USER_FAIL, payload: errors.SERVER_ERROR });
    } else {
      yield put({ type: actionsType.ADD_USER_SUCCESS, payload: signupResponseJSON });
    }
  } catch (e) {
    yield put({ type: actionsType.ADD_USER_FAIL, error: e });
  }
}

export default function* watchAddUser() {
  yield takeEvery(actionsType.ADD_USER, fetchUser);
}
