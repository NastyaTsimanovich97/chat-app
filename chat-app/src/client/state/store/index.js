import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import watchAddUser from '../sagas/addNewUser';
import watchSigninUser from '../sagas/signinUser';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(watchAddUser);
sagaMiddleware.run(watchSigninUser);

export default store;
