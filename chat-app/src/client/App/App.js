import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatContent from '../components/ChatContent';
import LoginPage from '../components/LoginPage';

class App extends React.PureComponent {
  // constructor(props){
  //   super(props),
  //   this.state = {
  //     isLoggedIn: false,
  //     isPassword: false,
  //   }
  // }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/chat">
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
