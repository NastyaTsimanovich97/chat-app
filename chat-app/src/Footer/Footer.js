import React from 'react';
import './Footer.style.js'

export default function Footer(props){
  return(
    <footer className={props.classes.footerChat}>
      <p>FOOTER</p>
    </footer>
  )
}

// export default class Footer extends React.Component{
//   render(){
//     return(
//       <footer className="footer-chat">
//         <p>FOOTER</p>
//       </footer>
//     )
//   }
// }