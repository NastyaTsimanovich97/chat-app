import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.style.css';
import Header from 'client/components/Header';
import Footer from 'client/components/Footer';
import ChatContent from 'client/components/ChatContent';
import LoginPage from 'client/components/LoginPage';
import { LOGIN, CHAT, DEFAULT } from 'client/constants/routes';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path={DEFAULT}>
              <LoginPage />
            </Route>
            <Route exact path={LOGIN}>
              <LoginPage />
            </Route>
            <Route exact path={CHAT}>
              <ChatContent />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
