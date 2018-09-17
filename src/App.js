import React, { PureComponent } from 'react'
// router
import { Route, Redirect } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import ProtectedPage from './pages/ProtectedPage'

class App extends PureComponent {
	state = {
		accessToken: 'jhvjhb'
	}

	clearLocalStorage = () => {
		localStorage.clear()
	}

	render() {
		const { accessToken } = this.state

		return (
			<React.Fragment>
				<Route exact path="/" component={LoginPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/protected" component={ProtectedPage} />
				<Route
					exact
					path="/protected"
					render={() =>
						accessToken ? <Redirect to="/protected" /> : <LoginPage />
					}
				/>
				{/* <Route path="/protected" component={ProtectedPage} /> */}
			</React.Fragment>
		)
	}
}

export default App
