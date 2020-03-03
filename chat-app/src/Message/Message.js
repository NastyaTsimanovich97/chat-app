import React from 'react';
import './Message.style';
import Avatar from '@material-ui/core/Avatar';

export default class Message extends React.Component {
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
