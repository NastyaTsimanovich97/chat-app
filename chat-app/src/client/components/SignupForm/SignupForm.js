import React, { PureComponent } from 'react';
import {
  Card, CardActions, CardContent, Button, Typography, TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupUser } from '../../state/actions';
import { emailReg, minNameLength, passwordReg } from '../../constants/regExp';

class SignupForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      isEmailValid: true,
      isNameValid: true,
      isPasswordValid: true,
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
    const { signupNewUser } = this.props;
    const isEmailValid = this.checkEmail();
    const isNameValid = this.checkName();
    const isPasswordValid = this.checkPassword();
    if (isEmailValid && isNameValid && isPasswordValid) {
      signupNewUser({ email, name, password });
      this.setState(() => ({
        email: '',
        name: '',
        password: '',
        isEmailValid: true,
        isNameValid: true,
        isPasswordValid: true,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        isEmailValid,
        isNameValid,
        isPasswordValid,
      }));
    }
  }

  render() {
    const { classes } = this.props;
    const {
      email, name, password, isEmailValid, isNameValid, isPasswordValid,
    } = this.state;

    return (
      <Card className={classes.SignupForm}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            error={!isEmailValid}
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
            error={!isNameValid}
            className={classes.SignupForm__input}
            required
            id="name-signup"
            label="Name"
            placeholder="Name"
            value={name}
            onChange={this.nameChange}
          />
          <TextField
            error={!isPasswordValid}
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
  signupNewUser: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    signupNewUser: (user) => dispatch(signupUser(user)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(SignupForm);
