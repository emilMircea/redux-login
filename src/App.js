import React, { Component } from 'react'
import './App.css'
import Carousel from 'grommet/components/Carousel'
import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import UsernameInput from './components/inputs/UserNameInput'
import PasswordInput from './components/inputs/PasswordInput'
import LoginButton from './components/buttons/LoginButton'
import ForgotPassButton from './components/buttons/ForgotPassButton'

import foto1 from './assets/images/foto-1.png'
import foto2 from './assets/images/foto-2.jpg'


class App extends Component {
	render() {
		return (
			<div className="flex-container">
				<div className="column one">
					<Title className="login-title">Deltaworx</Title>
					<Box className="login-wrapper">
						<p className="lead-message">Finally, you're back!</p>
						<form className="login-form">
							<UsernameInput />
							<PasswordInput />
							<br/>
							<div className="action-btns-wrapper">
								<LoginButton />
								{/* <Button href="#text-buttons" className={classes.link}>
									Forgot Password
								</Button> */}
								<ForgotPassButton />
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

export default App
