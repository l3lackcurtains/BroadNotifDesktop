// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import TextField from 'material-ui/TextField';
import { Row, Col, Grid } from 'react-flexbox-grid'
import styles from './Home.css';

export default class Home extends Component {
	render() {
		const { startNotif } = this.props
		return (
			<Grid>
				<Row>
					<Col xs={6} xsOffset={3}>
						<h4>Setup Login Credentials</h4>
						<div className={styles.container}>
							<RaisedButton
								label="Start Broad Notif"
								labelPosition="before"
								primary
								icon={<ActionAndroid />}
								onClick={startNotif}
							/>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}
