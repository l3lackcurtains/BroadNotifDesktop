// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import { Row, Col, Grid } from 'react-flexbox-grid'
import styles from './EmailList.css';
import { addEmailAction, addEmailResetAction, getEmailResetAction, getEmailAction, removeEmailResetAction, removeEmailAction } from '../actions/email'

class EmailList extends Component {
	state = {
		email: '',
		open: false,
	}

	componentWillMount() {
		this.props.dispatch(getEmailAction())
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.addEmail.isReceived) {
			this.setState({
				email: '',
			})
			this.props.dispatch(addEmailResetAction())
			this.props.dispatch(getEmailAction())
		}

		if (nextProps.removeEmail.isReceived) {
			this.props.dispatch(removeEmailResetAction())
			this.props.dispatch(getEmailAction())
		}
	}

	componentWillUnmount() {
		this.props.dispatch(addEmailResetAction())
		this.props.dispatch(getEmailResetAction())
		this.props.dispatch(removeEmailResetAction())
	}

	onEmailChange = e => this.setState({ email: e.target.value })
	handleToggle = () => {this.setState({ open: !this.state.open })}
	submitEmail = (e) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		if (!!this.state.email && re.test(this.state.email)) {
			const data = {
				email: this.state.email,
			}
			this.setState({
				email: '',
				open: false,
			}, () => {
				this.props.dispatch(addEmailAction(data))
			})
		}
	}

	removeEmail = (id) => {
		this.props.dispatch(removeEmailAction(id))
	}
	render() {
		const { addEmail, email } = this.props
		return (
			<Grid>
				<Row>
					<Col xs={12}>
						<div className={styles.container}>
							<RaisedButton
								label="Add New Email"
								onClick={this.handleToggle}
							/>
							{ email.isReceived && email.data.map((e, i) => <div className={styles.emailName} key={i}>
								<Row>
									<Col xs={10}>
										<p>{e.email}</p>
									</Col>
									<Col xs={2}>
										<IconButton touch onClick={() => this.removeEmail(e._id)}>
											<ContentClear color="#F50057" />
										</IconButton>
									</Col>
								</Row>
							</div>
							)}
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
						<Col className={styles.loginBtn} xs={12}>
							<RaisedButton
								label="Add"
								fullWidth
								backgroundColor="#FF9800"
								disabledBackgroundColor="#FFE0B2"
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
	removeEmail: state.removeEmail,
	email: state.email,
})

export default connect(mapStateToProps)(EmailList)
