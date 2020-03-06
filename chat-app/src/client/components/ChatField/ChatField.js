import React from 'react';
import PropTypes from 'prop-types';
import Message from 'client/components/Message';
import MessageFromUser from 'client/components/MessageFromUser';

export default class ChatField extends React.PureComponent {
  render() {
    const { ownerId, messages, classes } = this.props;

    return (
      <div className={classes.chatField}>
        <div className={classes.messageContainer}>
          {messages.map((message, index) => (message.userId === ownerId
            ? <MessageFromUser key={message.userId + (+index)} {...message} />
            : <Message key={message.userId + (+index)} {...message} />))}
        </div>
      </div>
    );
  }
}

ChatField.propTypes = {
  ownerId: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.string.isRequired,
  })).isRequired,
  classes: PropTypes.shape({
    chatField: PropTypes.string.isRequired,
    messageContainer: PropTypes.string.isRequired,
  }).isRequired,
};
