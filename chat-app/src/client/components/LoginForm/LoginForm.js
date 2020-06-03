import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardActions, CardContent, Button, Typography, TextField,
} from '@material-ui/core';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isUserExist: false,
    };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const {
      email, password, isUserExist,
    } = this.state;
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
          <Button variant="contained" color="primary">Sign In</Button>
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
