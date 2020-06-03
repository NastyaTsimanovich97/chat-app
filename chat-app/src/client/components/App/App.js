import React from 'react';
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

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path={ROOT}>
              <MainPage />
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
