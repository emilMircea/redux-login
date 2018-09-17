import React, { Component } from 'react'
import PropTypes from 'prop-types'
// redux
import { connect } from 'react-redux'
import { authorize } from '../reducers/reducer'
// router
import { Route, Redirect } from 'react-router-dom'
import ProtectedPage from './ProtectedPage'

import Carousel from 'grommet/components/Carousel'
import Box from 'grommet/components/Box'
import FormComponent from '../components/forms/FormComponent'

import '../App.css'
import foto1 from '../assets/images/foto-1.png'
import foto2 from '../assets/images/foto-2.png'


class LoginPage extends Component {
	render() {

		return (
			<div className="flex-container">
				<div className="column one">
					<h5 className="login-title">Deltaworx</h5>
					<Box className="login-wrapper">
						<p className="lead-message">Finally, you're back!</p>
						<FormComponent />
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

export default LoginPage
