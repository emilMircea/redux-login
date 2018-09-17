import React from 'react'
import Button from '@material-ui/core/Button'
import ForgotPassButton from '../buttons/ForgotPassButton'
import '../../App.css'
import UsernameInput from '../inputs/UsernameInput'
import PasswordInput from '../inputs/PasswordInput'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

class FormComponent extends React.Component {
	state = {
		username: '',
		password: '',
		redirectToReferrer: false
	}

	handleChange = e => {
		const target = e.target
		const name = target.name
		this.setState({
			[name]: target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const { username, password } = this.state
		console.log(`username is: ${username} and password is: ${password}`)
	}

	responseFacebook = response => {
		const { username, password } = this.state
		if (username && password && response) {
			localStorage.setItem('username', username)
			localStorage.setItem('password', password)
			localStorage.setItem('name', response.name)
			localStorage.setItem('fbID', response.userID)
			localStorage.setItem('fbToken', response.accessToken)
		}
		console.log(response);
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<UsernameInput name='username' handleChange={this.handleChange} />
				<PasswordInput name='password' handleChange={this.handleChange} />
				<br />
				<div className="actions-wrapper">
					{/* <Button
						type='submit'
						value='submit'
						variant="raised"
						color="primary"
						id="login-btn"
					>
						Login
					</Button> */}
					<FacebookLogin
						appId="326662884756996"
						autoLoad
						callback={this.responseFacebook}
						render={renderProps => (
							<button id='login-btn' onClick={renderProps.onClick}>
								Login
							</button>
						)}
					/>
					<ForgotPassButton />
				</div>
			</form>
		)
	}
}

export default FormComponent
