import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styles from './NavBar.css'

export default class NavBar extends Component {
	render() {
		return <div className={styles.navbar}>
			<Grid>
				<Row>
					<Col xs={12}>
						<h3>Broad Notif App</h3>
					</Col>
				</Row>
			</Grid>
		</div>
	}
}