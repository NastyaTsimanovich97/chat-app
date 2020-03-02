import React from 'react';
import './MessageFromUser.style';

export default class MessageFromUser extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Katya',
      messageText: 'Good!'
    };
  }
  render(){
    return(
      <div className={this.props.classes.messageContainer}>
        <div className={this.props.classes.messageHeader}>
          <p>{this.state.userName}</p>
        </div>
        <div className={this.props.classes.messageText}>
          {this.state.messageText}
        </div>
      </div>
    )
  }
}