import React from 'react';
import './ChatContent.style.js';
import Button from '@material-ui/core/Button';

export default class ChatContent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render(){
    return (
      <main className={this.props.classes.chatContent}>
        <p>ChatContent</p>
        <Button variant="contained" color="primary">Hello World</Button>
      </main>
    );
  }
}