import { call, put, takeEvery } from 'redux-saga/effects';
import actionsType from '../constants/actionTypes';
import errors from '../constants/errors';

const BAD_REQUEST = 400;
const serverErrorReg = '^5';
const emailConflict = 2;
const nameConflict = 3;

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
      })
      .then((res) => res.json()),
    action.payload);
    if (signupResponse.statusCode === BAD_REQUEST) {
      const errorCode = signupResponse.body.code;
      if (errorCode === emailConflict) {
        yield put({ type: actionsType.ADD_USER_FAILED, payload: errors.EMAIL_CONFLICT });
      }
      if (errorCode === nameConflict) {
        yield put({ type: actionsType.ADD_USER_FAILED, payload: errors.NAME_ERROR });
      }
    } else if (signupResponse.statusCode.toString().match(serverErrorReg)) {
      yield put({ type: actionsType.ADD_USER_FAILED, payload: errors.SERVER_ERROR });
    } else {
      yield put({ type: actionsType.ADD_USER_SUCCEEDED, payload: signupResponse });
    }
  } catch (e) {
    yield put({ type: actionsType.ADD_USER_FAILED, error: e });
  }
}

export default function* watchAddUser() {
  yield takeEvery(actionsType.ADD_USER, fetchUser);
}
