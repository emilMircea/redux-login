import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'


class ProtectedPage extends PureComponent {
	render() {
		const { token } = this.props
		if (!token) {
			return <Redirect to="/login" />
		}
		return (
			<div>
				<h3 style={{ color: 'green' }}>You are logged in.</h3>
				<button>Log out!</button>
				<h1>This is a private page with private content</h1>
			</div>
		);
	}
}

export default ProtectedPage;
