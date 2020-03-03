import React from 'react';

export default class Footer extends React.Component {
  render() {
    const { classes } = this.state;
    return (
      <footer className={classes.footerChat} />
    );
  }
}
