import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <header className={classes.headerChat}>
        <p>HEADER</p>
      </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.shape({
    headerChat: PropTypes.string.isRequired,
  }).isRequired,
};
