import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import './MainPage.css';
import getUserToken from '../../selectors/getUserToken';
import { CHAT } from '../../constants/routes';

function MainPage(props) {
  const { userToken } = props;
  if (userToken) {
    return <Redirect to={CHAT} />;
  }
  return (
    <div className="MainPage">
      <LoginForm />
      <SignupForm />
    </div>
  );
}

MainPage.propTypes = {
  userToken: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
  userToken: getUserToken(state),
});

export default connect(
  mapStateToProps,
)(MainPage);
