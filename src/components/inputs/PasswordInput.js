import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
  root: {
		width: 400,
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'black',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'black',
    },
  }
});



function PasswordInput(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <FormControl className={classes.margin}>
        <InputLabel
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
          htmlFor="custom-css-input"
        >
          Password
        </InputLabel>
        <Input
          classes={{
            root: classes.root,
            underline: classes.cssUnderline,
          }}
          id="custom-css-input"
        />
      </FormControl>
    </div>
  );
}

PasswordInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PasswordInput);
