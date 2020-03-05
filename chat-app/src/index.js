import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import addUser from './actions';
import nextId from 'react-id-generator';


ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

store.dispatch(addUser({ login: 'qwe', password: '123qw', userId: nextId('userId-')}));
store.dispatch(addUser({ login: 'Naers', password: '123', userId: nextId('userId-')}));
store.dispatch(addUser({ login: 'QAZ', password: 'qwe', userId: nextId('userId-')}));
store.dispatch(addUser({ login: '123', password: '123', userId: nextId('userId-')}));
