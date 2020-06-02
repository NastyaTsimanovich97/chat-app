import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardActions, CardContent, Button, Typography, TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      isUserExist: false,
    };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }


  handleSubmitLogin() {
    // const { email, password } = this.state;
    // const { users } = this.props;
    // const indexUser = users.some((user) => user.login === email && user.password === password);
    // if (indexUser && email && password) {
    //   this.setState({ isUserExist: false, isLoggedIn: true });
    // } else {
    //   this.setState({ isUserExist: true });
    // }
  }

  render() {
    const { classes } = this.props;
    const {
      email, password, isUserExist, isLoggedIn,
    } = this.state;
    let link;

    if (isLoggedIn) {
      link = '/chat';
    } else {
      link = '/login';
    }
    return (
      <Card className={classes.LoginForm}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Sign In
          </Typography>
          <TextField
            error={isUserExist}
            className={classes.LoginForm__input}
            required
            id="email-required"
            label="Email"
            placeholder="user@gmail.com"
            value={email}
            onChange={this.emailChange}
          />
          <TextField
            error={isUserExist}
            className={classes.LoginForm__input}
            required
            id="password-required"
            label="Password"
            type="password"
            placeholder="123Qwe"
            value={password}
            onChange={this.passwordChange}
          />
        </CardContent>
        <CardActions className={classes.LoginForm__cardActions}>
          <Link className={classes.LoginForm__link} to={link}><Button variant="contained" color="primary" onMouseDown={this.handleSubmitLogin}>Sign In</Button></Link>
        </CardActions>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.shape({
    LoginForm: PropTypes.string.isRequired,
    LoginForm__input: PropTypes.string.isRequired,
    LoginForm__cardActions: PropTypes.string.isRequired,
    LoginForm__link: PropTypes.string.isRequired,
  }).isRequired,
};
