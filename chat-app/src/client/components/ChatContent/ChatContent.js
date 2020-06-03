import React from 'react';
import PropTypes from 'prop-types';
import './ChatContent.style';
import ChatField from '../ChatField';
import ChatInputComponent from '../ChatInputComponent';

export default class ChatContent extends React.Component {
  constructor(props) {
    super(props);
  }

  updateData = () => {
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.chatContent}>
        <ChatField />
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
