// @flow
import React, { Component } from 'react';
import Setup from '../components/Setup';
import EmailList from '../components/EmailList';
import { Row, Col, Grid } from 'react-flexbox-grid'

export default class SetupPage extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col xs={6}>
						<Setup {...this.props} />
					</Col>
					<Col xs={6}>
						<EmailList {...this.props} />
					</Col>
				</Row>
			</Grid>
		);
	}
}
