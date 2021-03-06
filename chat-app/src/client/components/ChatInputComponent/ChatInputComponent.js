import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default class ChatInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    const { classes, updateData } = this.props;
    return (
      <div className={classes.chatInputContainer}>
        <TextField
          className={classes.chatInput}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows="2"
          placeholder="Enter your message..."
          variant="outlined"
          value={value}
          onChange={this.inputChange}
        />

        <Button
          className={classes.buttonInput}
          variant="contained"
          color="secondary"
          onClick={() => { updateData(value); }}
        >
          Send
        </Button>
      </div>
    );
  }
}

ChatInputComponent.propTypes = {
  classes: PropTypes.shape({
    buttonInput: PropTypes.string.isRequired,
    chatInput: PropTypes.string.isRequired,
    chatInputContainer: PropTypes.string.isRequired,
  }).isRequired,
  updateData: PropTypes.func.isRequired,
};
