import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import ActionBuild from 'material-ui/svg-icons/action/build';
import { yellow500 } from 'material-ui/styles/colors';
import styles from './NavBar.css'

const iconStyles = {
	marginTop: 24,
};

export default class NavBar extends Component {
	render() {
		return <div className={styles.navbar}>
			<Grid>
				<Row>
					<Col xs={11}>
						<Link to="/"><h3>Broad Notif App</h3></Link>
					</Col>
					<Col xs={1}>
						<Link to="/setup" className={styles.setup}>
							<ActionBuild style={iconStyles} color={yellow500} />
						</Link>
					</Col>
				</Row>
			</Grid>
		</div>
	}
}