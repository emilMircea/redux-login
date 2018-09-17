import React, { PureComponent } from 'react'
// router
import { IndeRoute, Route, Switch, Redirect, withRouter } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import ProtectedPage from './pages/ProtectedPage'

class App extends PureComponent {

	componentDidMount() {
		// clear localStorage for demo purposes
		this.clearLocalStorage()
	}

	state = {
		accessToken: null
	}

	clearLocalStorage = () => {
		localStorage.clear()
	}

	render() {
		return (
			<Switch>
				<Route path="/" component={LoginPage} />
				<Route
					exact
					path="/protected"
					// component={ProtectedPage}
					render={(props) => <ProtectedPage {...props} />}

				/>
			</Switch>
		)
	}
}

export default withRouter(App)
