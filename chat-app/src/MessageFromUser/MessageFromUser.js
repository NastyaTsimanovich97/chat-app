import React from 'react';
import './MessageFromUser.style';

export default class MessageFromUser extends React.Component {
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
