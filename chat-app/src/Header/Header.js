import React from 'react';

export default function Header(props){
  return (
      <header className={props.classes.headerChat}>
        <p>HEADER</p>
      </header>
  )
}

// export default class Header extends React.Component {
//   render(){
//     return (
//     <header className="header-chat">
//       <p>HEADER</p>
//     </header>
//     )
//   }
// }