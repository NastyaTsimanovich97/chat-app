import React from 'react';
import PropTypes from 'prop-types';

export default class ChatField extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chatField}>
        <div className={classes.messageContainer} />
      </div>
    );
  }
}

ChatField.propTypes = {
  classes: PropTypes.shape({
    chatField: PropTypes.string.isRequired,
    messageContainer: PropTypes.string.isRequired,
  }).isRequired,
};
