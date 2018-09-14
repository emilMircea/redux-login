import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    marginRight: 40
  },
  cssRoot: {
    color: 'white',
    backgroundColor: '#161616',
    '&:hover': {
      backgroundColor: 'black',
    },
  }
});


function LoginButton(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classNames(classes.button, classes.cssRoot)}
      >
        Login
      </Button>
    </div>
  );
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);
