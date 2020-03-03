import React from 'react';
import Message from '../Message';
import MessageFromUser from '../MessageFromUser';

export default class ChatField extends React.PureComponent {
  render() {
    const { ownerId, messages, classes } = this.props;

    return (
      <div className={classes.chatField}>
        <div className={classes.messageContainer}>
          {messages.map((message, index) => (message.userId === ownerId
            ? <MessageFromUser key={index} {...message} /> : <Message key={index} {...message} />))}
        </div>
      </div>
    );
  }
}
