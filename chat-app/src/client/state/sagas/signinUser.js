import { call, put, takeEvery } from 'redux-saga/effects';
import actionsType from '../constants/actionTypes';
import { errors, errorCodes, errorCodesMap } from '../constants/errors';
import { serverErrorReg } from '../../constants/regExp';

function* signinUserWorker(action) {
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
      const payload = errorCodesMap[errorCode] || errorCodes.default;
      yield put({ type: actionsType.SIGNIN_USER_FAIL, payload });
    } else if (signinResponseJSON.statusCode.toString().match(serverErrorReg)) {
      yield put({ type: actionsType.SIGNIN_USER_FAIL, payload: errors.SERVER_ERROR });
    } else {
      yield put({ type: actionsType.SIGNIN_USER_SUCCESS, payload: signinResponseJSON });
    }
  } catch (e) {
    yield put({ type: actionsType.SIGNIN_USER_FAIL, error: e });
  }
}

export default function* signinUserWatcher() {
  yield takeEvery(actionsType.SIGNIN_USER, signinUserWorker);
}
