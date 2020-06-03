import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.style.css';
import ChatContent from '../components/ChatContent';
import LoginPage from '../components/LoginPage';
import { CHAT, DEFAULT } from '../constants/routes';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
