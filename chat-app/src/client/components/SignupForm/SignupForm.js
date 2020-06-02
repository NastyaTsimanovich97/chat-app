import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardActions, CardContent, Button, Typography, TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addUser from '../../state/actions';
import getUserToken from '../../selectors/userSignup';


class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      isUserValid: false,
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

  handleSubmitSignUp() {
    const {
      email, name, password,
    } = this.state;
    const { addNewUser } = this.props;
    if (!email || !name || !password) {
      this.setState({ isUserValid: true });
    } else {
      addNewUser({ email, name, password });
      this.setState({
        email: '', name: '', password: '', isUserValid: false,
      });
    }
  }

  render() {
    const { classes } = this.props;
    const {
      email, name, password, isUserValid,
    } = this.state;
    let link;

    if (!isUserValid) {
      link = '/chat';
    } else {
      link = '/login';
    }
    return (
      <Card className={classes.SignupForm}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            error={isUserValid}
            className={classes.SignupForm__input}
            required
            id="email-signup"
            label="Email"
            placeholder="user@gmail.com"
            value={email}
            onChange={this.emailChange}
          />
          <TextField
            error={isUserValid}
            className={classes.SignupForm__input}
            required
            id="name-signup"
            label="Name"
            placeholder="Name"
            value={name}
            onChange={this.nameChange}
          />
          <TextField
            error={isUserValid}
            className={classes.SignupForm__input}
            required
            id="password-signup"
            label="Password"
            type="password"
            placeholder="123Qwe"
            value={password}
            onChange={this.passwordChange}
          />
        </CardContent>
        <CardActions className={classes.SignupForm__cardActions}>
          <Link className={classes.SignupForm__link} to={link}><Button className={classes.SignupForm__link__button} variant="contained" color="secondary" onMouseDown={this.handleSubmitSignUp}>Sign Up</Button></Link>
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
    SignupForm__link: PropTypes.string.isRequired,
    SignupForm__link__button: PropTypes.string.isRequired,
  }).isRequired,
  addNewUser: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: (user) => dispatch(addUser(user)),
  };
}

const mapStateToProps = (state) => ({
  user: state.user,
  userToken: getUserToken(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm);
