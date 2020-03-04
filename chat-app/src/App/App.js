import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.style.css';
import Header from '../Header';
import Footer from '../Footer';
import ChatContent from '../ChatContent';
import LoginPage from '../LoginPage';

class App extends React.Component {
  // constructor(props){
  //   super(props),
  //   this.state = {
  //     isLoggedIn: false,
  //     isPassword: false,
  //   }
  // }
  render(){
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
