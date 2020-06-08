import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'client/state/store';
import 'index.css';
import App from 'client/components/App/App';
import * as serviceWorker from 'serviceWorker';

ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>, document.getElementById('root'));

serviceWorker.unregister();
