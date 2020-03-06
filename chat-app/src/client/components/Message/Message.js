import React from 'react';
import PropTypes from 'prop-types';
import './Message.style';
import Avatar from '@material-ui/core/Avatar';

export default class Message extends React.PureComponent {
  render() {
    const {
      classes, userLogo, userName, message,
    } = this.props;
    return (
      <div className={classes.messageContainer}>
        <div className={classes.messageHeader}>
          <Avatar className={classes.purple}>{userLogo}</Avatar>
          <p>{userName}</p>
        </div>
        <div className={classes.messageText}>
          {message}
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  classes: PropTypes.shape({
    messageContainer: PropTypes.string.isRequired,
    messageHeader: PropTypes.string.isRequired,
    purple: PropTypes.string.isRequired,
    messageText: PropTypes.string.isRequired,
  }).isRequired,
  userLogo: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
