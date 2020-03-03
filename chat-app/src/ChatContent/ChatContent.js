import React from 'react';
import './ChatContent.style.js';
import ChatField from '../ChatField';
import ChatInputComponent from '../ChatInputComponent';

export default class ChatContent extends React.Component{
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
      ownerId: '123'
    }
  }

  updateData = (message) => {
    const { messages } = this.state;
    const data = {
        userId: '123',
        userName: 'Katya',
        userLogo: 'Ka',
        message: message,
        ownerId: '1234qwe'
     };

    this.setState({messages: [...messages, data]})
  };

  render(){
    const { ownerId, messages } = this.state;
   
    return (
      <main className={this.props.classes.chatContent}>
       <ChatField ownerId={ownerId} messages={messages} />
       <ChatInputComponent updateData={this.updateData}/>
      </main>
    );
  }
}