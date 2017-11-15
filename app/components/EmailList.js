// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import { Row, Col, Grid } from 'react-flexbox-grid'
import styles from './EmailList.css';
import { addEmailAction } from '../actions/user'

class EmailList extends Component {
	state = {
		email: '',
		open: false,
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.addEmail.isReceived) {
			this.setState({
				email: '',
			})
		}
	}

	onEmailChange = e => this.setState({ email: e.target.value })
	handleToggle = () => this.setState({ open: !this.state.open })
	submitEmail = (e) => {
		if (!!this.state.email) {
			const data = {
				email: this.state.email,
			}
			this.props.dispatch(addEmailAction(data))
		}
	}
	render() {
		const { addEmail } = this.props
		return (
			<Grid>
				<Row>
					<Col xs={12}>
						<div className={styles.container}>
							<RaisedButton
								label="Add"
								onClick={this.handleToggle}
							/>
						</div>
					</Col>
				</Row>
				<Drawer
					docked={false}
					open={this.state.open}
					width={300}
					openSecondary
					onRequestChange={(open) => this.setState({ open })}
				>
					<div className={styles.drawer}>
					<p>Add Email to <b>Incomming Emails List</b> in server.</p>
						<Col xs={12}>
							<TextField
								fullWidth
								hintText="Email"
								type="email"
								onChange={this.onEmailChange}
							/>
						</Col>
						{
							addEmail.error ? <div className={styles.errMsg}>{addEmail.data}</div> : null
						}
						{
							addEmail.isReceived ? <div>New Email added to list.</div> : null
						}
						<Col className={styles.loginBtn} xs={12}>
							<RaisedButton
								label="Let's go"
								fullWidth
								onClick={this.submitEmail}
								disabled={!this.state.email}
							/>
						</Col>
					</div>
				</Drawer>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	addEmail: state.addEmail,
})

export default connect(mapStateToProps)(EmailList)
