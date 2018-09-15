import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const styles = theme => ({
	root: {
		width: 400,
		marginBottom: 20
	},
	cssLabel: {
		'&$cssFocused': {
			color: 'black'
		}
	},
	cssFocused: {},
	cssUnderline: {
		'&:after': {
			borderBottomColor: 'black'
		}
	}
})

function UserNameInput(props) {
	const { classes } = props

	return (
			<Input
				classes={{
					root: classes.root,
					underline: classes.cssUnderline
				}}
				id="custom-css-input"
			/>
	)
}

UserNameInput.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UserNameInput)
