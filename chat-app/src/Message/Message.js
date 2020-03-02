import React from 'react';
import './Message.style';
import Avatar from '@material-ui/core/Avatar';

export default class Message extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      userLogo: 'Se',
      userName: 'Semen',
      messageText: 'Hello, how are you?'
    };
  }
  render(){
    return(
      <div className={this.props.classes.messageContainer}>
        <div className={this.props.classes.messageHeader}>
          <Avatar className={this.props.classes.purple}>{this.state.userLogo}</Avatar>
          <p>{this.state.userName}</p>
        </div>
        <div className={this.props.classes.messageText}>
          {this.state.messageText}
        </div>
      </div>
    )
  }
}