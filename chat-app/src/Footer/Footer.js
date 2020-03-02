import React from 'react';
import './Footer.style.js';
import TextField from '@material-ui/core/TextField';

export default class Footer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <footer className="footer-chat">
        <TextField className={this.props.classes.footerChat}
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
        />
      </footer>
    )
  }
}