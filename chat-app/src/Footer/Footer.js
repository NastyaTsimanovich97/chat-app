import React from 'react';

export default class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footerChat} />
    );
  }
}
