// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Row, Col, Grid } from 'react-flexbox-grid'
import styles from './Setup.css';
import { addUserAction } from '../actions/user'

class Setup extends Component {
	state = {
		email: '',
		password: '',
	}

	onEmailChange = e => this.setState({ email: e.target.value })
	onPasswordChange = e => this.setState({ password: e.target.value })

	submitEmailPass = (e) => {
		if (!!this.state.email && !!this.state.password) {
			const data = {
				email: this.state.email,
				password: this.state.password,
			}
			this.props.dispatch(addUserAction(data))
		}
	}
	render() {
		const { addUser } = this.props
		if (addUser.isReceived) {
			return <Redirect to="/main" />
		}
		return (
			<Grid>
				<Row>
					<Col xs={6} xsOffset={3}>
						<div className={styles.container}>
							<p>Setup Email and Password</p>
							<Row>
								<TextField
									fullWidth
									hintText="Email"
									type="email"
									onChange={this.onEmailChange}
								/>
							</Row>
							<Row>
								<TextField
									fullWidth
									hintText="Password"
									type="password"
									onChange={this.onPasswordChange}
								/>
							</Row>
							{
								addUser.error ? <div className={styles.errMsg}>{addUser.data}</div> : null
							}
							<Row className={styles.loginBtn}>
								<RaisedButton
									label="Let's go"
									fullWidth
									onClick={this.submitEmailPass}
									disabled={!this.state.email || !this.state.password}
								/>
							</Row>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	addUser: state.addUser,
})

export default connect(mapStateToProps)(Setup)
