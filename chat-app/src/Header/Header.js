import React from 'react';

export default class Header extends React.Component {
  render() {
    const { classes } = this.state;
    return (
      <header className={classes.headerChat}>
        <p>HEADER</p>
      </header>
    );
  }
}
