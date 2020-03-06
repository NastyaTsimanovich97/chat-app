import React from 'react';
import PropTypes from 'prop-types';
import './ChatContent.style';
import ChatField from 'client/components/ChatField';
import ChatInputComponent from 'client/components/ChatInputComponent';

export default class ChatContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{
        userId: '1234qwe',
        userName: 'Semen',
        userLogo: 'Se',
        message: 'Hello, how are you?',
      },
      {
        userId: '123',
        userName: 'Katya',
        userLogo: 'Ka',
        message: 'Good!',
      },
      ],
      ownerId: '123',
    };
  }

  updateData = (message) => {
    const { messages } = this.state;
    const data = {
      userId: '123',
      userName: 'Katya',
      userLogo: 'Ka',
      message,
      ownerId: '1234qwe',
    };

    this.setState({ messages: [...messages, data] });
  };

  render() {
    const { ownerId, messages } = this.state;
    const { classes } = this.props;

    return (
      <main className={classes.chatContent}>
        <ChatField ownerId={ownerId} messages={messages} />
        <ChatInputComponent updateData={this.updateData} />
      </main>
    );
  }
}

ChatContent.propTypes = {
  classes: PropTypes.shape({
    chatContent: PropTypes.string.isRequired,
  }).isRequired,
};
