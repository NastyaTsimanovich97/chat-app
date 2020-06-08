import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.style.css';
import ChatContent from '../ChatContent';
import MainPage from '../MainPage';
import { CHAT, ROOT } from '../../constants/routes';
import Footer from '../Footer';
import Header from '../Header';
import AuthenticationRoute from '../AuthenticationRoute';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path={ROOT}>
              <MainPage />
            </Route>
            <AuthenticationRoute path={CHAT}>
              <ChatContent />
            </AuthenticationRoute>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
