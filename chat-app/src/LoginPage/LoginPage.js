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
import addUser from '../actions';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isPassword: false,
      login: '',
      password: '',
      userId: nextId('userId-'),
      hasUser: false,
    };
    this.loginChange = this.loginChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loginChange(event) {
    const { login } = this.state;
    this.setState({ login: event.target.value });
    if (login !== '') {
      this.setState({ isLoggedIn: true });
    }
  }

  passwordChange(event) {
    const { password } = this.state;
    this.setState({ password: event.target.value });
    if (password !== '') {
      this.setState({ isPassword: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { login, password, userId, hasUser } = this.state;
    const { addNewUser, users } = this.props;
    const indexUser = users.findIndex(user => {
      if(user.login === login){
        return true;
      } return false;
    });
    if (indexUser === -1) {
      addNewUser({ login, password, userId });
      this.setState({ login: '', password: '', userId: nextId('userId-') });
      this.setState({hasUser: false});
    } else {
      this.setState({hasUser: true});
    }
  }

  render() {
    const { classes } = this.props;
    const { login, password, hasUser } = this.state;

    const { isLoggedIn } = this.state;
    const { isPassword } = this.state;
    let button;
    let signInButton;

    if (isLoggedIn && isPassword) {
      signInButton = <Link to="/chat"><Button variant="contained" color="secondary" onClick={this.handleSubmit}>Sign Up</Button></Link>;
      button = <Link to="/chat"><Button variant="contained" color="primary">Login</Button></Link>;
    } else {
      button = <Button variant="contained" color="primary">Login</Button>;
      signInButton = <Button variant="contained" color="secondary">Sign Up</Button>;
    }

    return (
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Login
            </Typography>
            <TextField
              error={hasUser}
              className={classes.input}
              required
              id="standard-required"
              label="Login"
              placeholder="Login"
              value={login}
              onChange={this.loginChange}
            />
            <TextField
              error={hasUser}
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
            { signInButton }
            { button }
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


const mapStateToProps = state => { 
  return { users: state.users }; 
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
