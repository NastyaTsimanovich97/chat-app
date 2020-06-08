import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import getUserToken from '../../selectors/getUserToken';
import { ROOT } from '../../constants/routes';

function AuthenticationRoute(props) {
  const { userToken } = props;
  if (!userToken) {
    return <Redirect to={ROOT} />;
  }
  return <Route {...props} />;
}

AuthenticationRoute.propTypes = {
  userToken: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
  userToken: getUserToken(state),
});

export default connect(
  mapStateToProps,
)(AuthenticationRoute);
