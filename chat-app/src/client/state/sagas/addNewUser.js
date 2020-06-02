import { call, put, takeEvery } from 'redux-saga/effects';
import actionsType from '../constants/actionTypes';

function* fetchUser(action) {
  try {
    const userResponse = yield call(() => fetch('/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'http://localhost:3000',
        },
        body: JSON.stringify(action.payload),
      })
      .then((res) => res.json())
      .then((res) => res.body),
    action.payload);
    if (userResponse.code) {
      yield put({ type: actionsType.ADD_USER_FAILED, error: userResponse });
    } else {
      yield put({ type: actionsType.ADD_USER_SUCCEEDED, payload: userResponse });
    }
  } catch (e) {
    yield put({ type: actionsType.ADD_USER_FAILED, error: e });
  }
}

export default function* watchAddUser() {
  yield takeEvery(actionsType.ADD_USER, fetchUser);
}
