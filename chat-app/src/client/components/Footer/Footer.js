import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footerChat} />
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.shape({
    footerChat: PropTypes.string.isRequired,
  }).isRequired,
};
