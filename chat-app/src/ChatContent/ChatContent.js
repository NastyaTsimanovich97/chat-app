import React from 'react';
import './ChatContent.style.js';
import Message from '../Message';
import MessageFromUser from '../MessageFromUser';

export default class ChatContent extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <main className={this.props.classes.chatContent}>
        <Message></Message>
        <MessageFromUser></MessageFromUser>
      </main>
    );
  }
}