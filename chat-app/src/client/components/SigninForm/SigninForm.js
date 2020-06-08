import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card, CardActions, CardContent, Button, Typography, TextField,
} from '@material-ui/core';
import { signinUser as signinUserAction } from '../../state/actions';
import { emailReg, passwordReg } from '../../constants/regExp';

class SigninForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailValid: true,
      isPasswordValid: true,
    };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
  }

  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  checkEmail() {
    const { email } = this.state;
    return !!email.match(emailReg) && email !== '';
  }

  checkPassword() {
    const { password } = this.state;
    return !!password.match(passwordReg) && password !== '';
  }

  handleSubmitSignIn() {
    const { email, password } = this.state;
    const { signinUser } = this.props;
    const isEmailValid = this.checkEmail();
    const isPasswordValid = this.checkPassword();
    if (isEmailValid && isPasswordValid) {
      signinUser({ email, password });
      this.setState({
        email: '',
        password: '',
        isEmailValid: true,
        isPasswordValid: true,
      });
    } else {
      this.setState({
        isEmailValid,
        isPasswordValid,
      });
    }
  }

  render() {
    const { classes } = this.props;
    const {
      email, password, isEmailValid, isPasswordValid,
    } = this.state;
    return (
      <Card className={classes.LoginForm}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Sign In
          </Typography>
          <TextField
            error={!isEmailValid}
            className={classes.LoginForm__input}
            required
            id="email-required"
            label="Email"
            placeholder="user@gmail.com"
            value={email}
            onChange={this.emailChange}
          />
          <TextField
            error={!isPasswordValid}
            className={classes.LoginForm__input}
            required
            id="password-required"
            label="Password"
            type="password"
            value={password}
            onChange={this.passwordChange}
          />
        </CardContent>
        <CardActions className={classes.LoginForm__cardActions}>
          <Button variant="contained" color="primary" onClick={this.handleSubmitSignIn}>Sign In</Button>
        </CardActions>
      </Card>
    );
  }
}

SigninForm.propTypes = {
  classes: PropTypes.shape({
    LoginForm: PropTypes.string.isRequired,
    LoginForm__input: PropTypes.string.isRequired,
    LoginForm__cardActions: PropTypes.string.isRequired,
    LoginForm__link: PropTypes.string.isRequired,
  }).isRequired,
  signinUser: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    signinUser: (user) => dispatch(signinUserAction(user)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(SigninForm);
