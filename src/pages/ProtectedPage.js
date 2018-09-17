import React, { PureComponent } from 'react'

class ProtectedPage extends PureComponent {


	render() {
		// const { token } = this.state
		// if (!token) {
		// 	this.props.history.push('/login')
		// }
		return (
			<div>
				<h3 style={{ color: 'green' }}>You are logged in.</h3>
				<button>Log out!</button>
				<h1>This is a private page with private content</h1>
			</div>
		)
	}
}

export default ProtectedPage
