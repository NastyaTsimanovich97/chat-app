import React from 'react';
import PropTypes from 'prop-types';
import './MessageFromUser.style';

export default class MessageFromUser extends React.PureComponent {
  render() {
    const { classes, userName, message } = this.props;
    return (
      <div className={classes.messageContainer}>
        <div className={classes.messageHeader}>
          <p>{userName}</p>
        </div>
        <div className={classes.messageText}>
          {message}
        </div>
      </div>
    );
  }
}

MessageFromUser.propTypes = {
  classes: PropTypes.shape({
    messageContainer: PropTypes.string.isRequired,
    messageHeader: PropTypes.string.isRequired,
    messageText: PropTypes.string.isRequired,
  }).isRequired,
  userName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
