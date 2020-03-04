import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isPassword: false,
      login: '',
      password: '',
    };
    this.loginChange = this.loginChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  loginChange(event) {
    const { login } = this.state;
    this.setState({ login: event.target.value });
    if (login !== '') {
      this.setState({ isLoggedIn: true });
    }
  }

  passwordChange(event) {
    const { password } = this.state;
    this.setState({ password: event.target.value });
    if (password !== '') {
      this.setState({ isPassword: true });
    }
  }

  render() {
    const { classes } = this.props;
    const { login, password } = this.state;

    const { isLoggedIn } = this.state;
    const { isPassword } = this.state;
    let button;

    if (isLoggedIn && isPassword) {
      button = <Link to="/chat"><Button variant="contained" color="primary">Login</Button></Link>;
    } else {
      button = <Button variant="contained" color="primary">Login</Button>;
    }

    return (
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Login
            </Typography>
            <TextField
              className={classes.input}
              required
              id="standard-required"
              label="Login"
              placeholder="Login"
              value={login}
              onChange={this.loginChange}
            />
            <TextField
              className={classes.input}
              required
              id="password-required"
              label="Password"
              type="password"
              placeholder="123QWE"
              value={password}
              onChange={this.passwordChange}
            />
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button variant="contained" color="secondary">
              Sign In
            </Button>
            { button }
          </CardActions>
        </Card>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
