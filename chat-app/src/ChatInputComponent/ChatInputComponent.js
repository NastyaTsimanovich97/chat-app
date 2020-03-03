import React from 'react';
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
    const { classes, value, updateData } = this.props;
    return (
      <div className={classes.chatInputContainer}>
        <TextField
          className={classes.chatInput}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows="2"
          placeholder="Message"
          variant="outlined"
          value={value}
          onChange={this.inputChange}
        />

        <Button
          className={classes.buttonInput}
          variant="contained"
          color="secondary"
          onClick={() => { updateData(this.state.value); }}
        >
          Send
        </Button>
      </div>
    );
  }
}
