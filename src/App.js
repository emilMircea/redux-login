import React, { Component } from 'react'
import './App.css'
import Carousel from 'grommet/components/Carousel'
import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Form from 'grommet/components/Form'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Header from 'grommet/components/Header'
import foto1 from './assets/images/foto-1.png'
import foto2 from './assets/images/foto-2.jpg'

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 400
	},
	button: {
    paddingTop: 20,
    paddingBottom: 20,
		paddingLeft: 40,
		paddingRight: 40,
    marginRight: 20,
    marginTop: 30,
		background: 'black',
		color: 'white',
  },
	link: {
		background: 'none',
	}
})

class App extends Component {
	render() {
		const { classes } = this.props
		return (
			<div className="flex-container">
				<div className="column one">
					<Title className="login-title">Deltaworx</Title>
					<Box className="login-wrapper">
						<p className="lead-message">Finally, you're back!</p>
						<form className="login-form">
							<TextField
								id="with-placeholder"
								label="Username *"
								placeholder="Username *"
								className={classes.textField}
								margin="normal"
							/>
							<TextField
								id="with-placeholder"
								label="Password *"
								placeholder="Password *"
								className={classes.textField}
								margin="normal"
							/>
							<br/>
							<div className="action-btns-wrapper">
								<Button
									variant="contained"
									type="submit"
									className={classes.button}
								>
									Login
								</Button>
								<Button href="#text-buttons" className={classes.link}>
									Forgot Password
								</Button>
							</div>
						</form>
					</Box>
				</div>
				<div className="column two">
					<Carousel>
						<img src={foto1} alt="first" />
						<img src={foto2} alt="second" />
					</Carousel>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(App)
