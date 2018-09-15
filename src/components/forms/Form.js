import * as React from 'react'

import Button from '@material-ui/core/Button'
import ForgotPassButton from '../buttons/ForgotPassButton'
import { Formik, Field, Form } from 'formik'
import { TextField } from 'formik-material-ui'
import '../../App.css'

const FormComponent = () => (
	<Formik
		initialValues={{ email: '', password: '' }}
		validate={values => {
			const errors: Partial<Values> = {}
			if (!values.email) {
				errors.email = 'Required'
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
			) {
				errors.email = 'Invalid email address'
			}
			return errors
		}}
		onSubmit={(values, { setSubmitting }) => {
			setTimeout(() => {
				setSubmitting(false)
				alert(JSON.stringify(values, null, 2))
			}, 500)
		}}
		render={({ submitForm, isSubmitting, values }) => (
			<Form className="form">
				<Field type="email" label="Email" name="email" component={TextField} />
				<br />
				<Field
					type="password"
					label="Password"
					name="password"
					component={TextField}
				/>
				<br />

				<br />
				<div className="actions-wrapper">
					<Button
						variant="raised"
						color="primary"
						disabled={isSubmitting}
						onClick={submitForm}
						id='login-btn'
					>
						Login
					</Button>
					<ForgotPassButton />
				</div>
			</Form>
		)}
	/>
)

export default FormComponent
