import { call, put, takeEvery } from 'redux-saga/effects';
import actionsType from '../constants/actionTypes';
import { errors, errorCodes, errorCodesMap } from '../constants/errors';
import { serverErrorReg } from '../../constants/regExp';

function* signupUserWorker(action) {
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
      const payload = errorCodesMap[errorCode] || errorCodes.default;
      yield put({ type: actionsType.SIGNUP_USER_FAIL, payload });
    } else if (signupResponseJSON.statusCode.toString().match(serverErrorReg)) {
      yield put({ type: actionsType.SIGNUP_USER_FAIL, payload: errors.SERVER_ERROR });
    } else {
      yield put({ type: actionsType.SIGNUP_USER_SUCCESS, payload: signupResponseJSON });
    }
  } catch (e) {
    yield put({ type: actionsType.SIGNUP_USER_FAIL, error: e });
  }
}

export default function* signupUserWatcher() {
  yield takeEvery(actionsType.SIGNUP_USER, signupUserWorker);
}
