import React, { Component } from 'react';
import {
  Card, CardActions, CardContent, Button, Typography, TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../../state/actions';
import { emailReg, minNameLength, passwordReg } from '../../constants/constants';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      isEmailValid: false,
      isNameValid: false,
      isPasswordValid: false,
      isSignupClick: false,
    };
    this.emailChange = this.emailChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
  }

  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  nameChange(event) {
    this.setState({ name: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  checkEmail() {
    const { email } = this.state;
    return !!email.match(emailReg) && email !== '';
  }

  checkName() {
    const { name } = this.state;
    return name.length >= minNameLength && name !== '';
  }

  checkPassword() {
    const { password } = this.state;
    return !!password.match(passwordReg) && password !== '';
  }

  handleSubmitSignUp() {
    const {
      email, name, password,
    } = this.state;
    const { addNewUser } = this.props;
    const isEmailValid = this.checkEmail();
    const isNameValid = this.checkName();
    const isPasswordValid = this.checkPassword();
    this.setState((state) => ({
      ...state,
      isSignupClick: true,
      isEmailValid,
      isNameValid,
      isPasswordValid,
    }));
    if (isEmailValid && isNameValid && isPasswordValid) {
      addNewUser({ email, name, password });
      this.setState(() => ({
        email: '',
        name: '',
        password: '',
        isEmailValid: false,
        isNameValid: false,
        isPasswordValid: false,
        isSignupClick: false,
      }));
    }
  }

  render() {
    const { classes } = this.props;
    const {
      email, name, password, isEmailValid, isNameValid, isPasswordValid, isSignupClick,
    } = this.state;

    return (
      <Card className={classes.SignupForm}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            error={isSignupClick ? !isEmailValid : false}
            className={classes.SignupForm__input}
            required
            id="email-signup"
            label="Email"
            type="email"
            placeholder="user@gmail.com"
            value={email}
            onChange={this.emailChange}
          />
          <TextField
            error={isSignupClick ? !isNameValid : false}
            className={classes.SignupForm__input}
            required
            id="name-signup"
            label="Name"
            placeholder="Name"
            value={name}
            onChange={this.nameChange}
          />
          <TextField
            error={isSignupClick ? !isPasswordValid : false}
            className={classes.SignupForm__input}
            required
            id="password-signup"
            label="Password"
            type="password"
            placeholder="1Qw"
            value={password}
            onChange={this.passwordChange}
          />
        </CardContent>
        <CardActions className={classes.SignupForm__cardActions}>
          <Button className={classes.SignupForm__button} variant="contained" color="secondary" onClick={this.handleSubmitSignUp}>Sign Up</Button>
        </CardActions>
      </Card>
    );
  }
}

SignupForm.propTypes = {
  classes: PropTypes.shape({
    SignupForm: PropTypes.string.isRequired,
    SignupForm__input: PropTypes.string.isRequired,
    SignupForm__cardActions: PropTypes.string.isRequired,
    SignupForm__button: PropTypes.string.isRequired,
  }).isRequired,
  addNewUser: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: (user) => dispatch(addUser(user)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(SignupForm);
