import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  cssRoot: {
    color: 'black',
    background: 'transparent',
    '&:hover': {
      background: 'transparent'
    },
  }
});


function ForgotPassButton(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Button href="#text-buttons" className={classNames(classes.cssRoot)}>
        Forgot Password
      </Button>
    </div>
  );
}

ForgotPassButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForgotPassButton);
