// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Row, Col, Grid } from 'react-flexbox-grid'
import styles from './Setup.css';
import { addUserAction, getUserAction, addUserResetAction, getUserResetAction } from '../actions/user'

class Setup extends Component {
	state = {
		email: '',
		password: '',
	}

	componentWillMount() {
		this.props.dispatch(getUserAction())
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.user.isReceived) {
			this.setState({
				email: nextProps.user.data.email,
				password: '',
			})
		}
	}

	componentWillUnmount() {
		this.props.dispatch(getUserResetAction())
		this.props.dispatch(addUserResetAction())
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
		const { addUser, user } = this.props
		return (
			<Grid>
				<Row>
					<Col xs={12}>
						<div className={styles.container}>
							<p>Setup Email and Password</p>
							<Row>
								<TextField
									fullWidth
									hintText="Email"
									type="email"
									value={this.state.email}
									onChange={this.onEmailChange}
								/>
							</Row>
							<Row>
								<TextField
									fullWidth
									hintText="Password"
									type="password"
									value={this.state.password}
									onChange={this.onPasswordChange}
								/>
							</Row>
							{
								addUser.error && !addUser.isReceived ? <div className={styles.errMsg}>{addUser.data}</div> : null
							}
							{
								addUser.isReceived ? <div>Changed Email Password successfully</div> : null
							}
							<Row className={styles.loginBtn}>
								<RaisedButton
									label="Change"
									backgroundColor="#FF9800"
									disabledBackgroundColor="#FFE0B2"
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
	user: state.user,
})

export default connect(mapStateToProps)(Setup)
