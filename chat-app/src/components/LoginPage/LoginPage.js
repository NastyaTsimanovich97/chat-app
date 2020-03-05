import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import nextId from 'react-id-generator';
import addUser from '../../state/actions';
// import { createSelector } from 'reselect';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isSignedUp: false,
      login: '',
      password: '',
      userId: nextId('userId-'),
      userExist: false,
    };
    this.loginChange = this.loginChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  loginChange(event) {
    this.setState({ login: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmitSignUp() {
    const { login, password, userId} = this.state;
    const { addNewUser, users, haveUser } = this.props;
    const indexUser = users.some(user => user.login === login);
    console.log(haveUser)
    if (indexUser || !login  || !password ) {
      this.setState({userExist: true});
    } else {
      addNewUser({ login, password, userId });
      this.setState({ login: '', password: '', userId: nextId('userId-'), userExist: false, isSignedUp: true });
    }
  }

  handleSubmitLogin() {
    const { login, password } = this.state;
    const { users } = this.props;
    const indexUser = users.some(user => user.login === login && user.password === password);
    if ( indexUser && login && password ) {
      this.setState({ userExist: false, isLoggedIn: true });
    } else {
      this.setState({ userExist: true });
    }
  }

  render() {
    const { classes } = this.props;
    const { login, password, userExist, isLoggedIn, isSignedUp } = this.state;

    let link;

    if (isSignedUp || isLoggedIn) {
      link = '/chat';
    } else {
      link = '/login';
    }

    return (
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Login
            </Typography>
            <TextField
              error={userExist}
              className={classes.input}
              required
              id="standard-required"
              label="Login"
              placeholder="Login"
              value={login}
              onChange={this.loginChange}
            />
            <TextField
              error={userExist}
              className={classes.input}
              required
              id="password-required"
              label="Password"
              type="password"
              placeholder="123QWE"
              value={password}
              onChange={this.passwordChange}
            />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Link to={link}><Button variant="contained" color="secondary" onMouseDown={this.handleSubmitSignUp}>Sign Up</Button></Link>
            <Link to={link}><Button variant="contained" color="primary" onMouseDown={this.handleSubmitLogin}>Login</Button></Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  addNewUser: PropTypes.func,
};

// const findLoginSelector = (state) => {
//   return state.users.some(user => user.login === login);
// }

const mapStateToProps = state => { 
  return { 
    users: state.users,
    // haveUser: findLoginSelector(state), 
  }; 
};

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: (user) => dispatch(addUser(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
