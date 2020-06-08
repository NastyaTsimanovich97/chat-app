import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import signupUserWatcher from '../sagas/signupUser';
import signinUserWatcher from '../sagas/signinUser';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(signupUserWatcher);
sagaMiddleware.run(signinUserWatcher);

export default store;
