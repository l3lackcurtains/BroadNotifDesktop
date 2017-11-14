// @flow
import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid'
import { removeUserAction } from '../actions/user'
import { Event } from 'react-socket-io'
import Sound from 'react-sound'
import moment from 'moment'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ReactHtmlParser from 'react-html-parser'
import FlatButton from 'material-ui/FlatButton'
import styles from './MainContent.css';

class Main extends Component {
	constructor(props, context) {
		super(props, context);
		this.onMessage = this.onMessage.bind(this);
	}

	state = {
		playStatus: Sound.status.STOPPED,
		mails: []
	}

	onMessage = (d) => {
		console.log(d)
		this.setState({
			mails: [ d.mail, ...this.state.mails ],
		})
		this.setState({
			playStatus: Sound.status.PLAYING,
		})
	}

	handleSongFinishedPlaying = () => {
		this.setState({
			playStatus: Sound.status.STOPPED,
		})
	}

	render() {
		const { logout } = this.props
		return (
			<div>
				<Grid>
					<Row>
						{
						/*<Col xs={3} xsOffset={9}>
							<div className={styles.logout}><FlatButton label="logout" onClick={logout} style={{ color: '#fff' }}/></div>
						</Col>
						*/
					}
						<Col xs={8} xsOffset={2}>
							<p>App is running, You will receive notification instantly when new email is received.</p>
						</Col>
						<Col xs={8} xsOffset={2}>
							{
								this.state.mails.map((m, i) => {
									return <div key={i} style={{ padding: '4px' }}>
										<Card>
											<CardHeader
												title={`From ${m.from}`}
												subtitle={moment(m.date).fromNow()}
												actAsExpander
												showExpandableButton
											/>
											<CardText expandable>
												<b>{m.subject}</b>
												<p>{ReactHtmlParser(m.body)}</p>
											</CardText>
										</Card>
									</div>
								})
							}
						</Col>
					</Row>
				</Grid>
				<Event event="newemail" handler={this.onMessage} />
				<Sound
					url="http://download5.prokerala.com/downloads/ringtones/files/mp3/vid-20171113-wa0033-high-quality-36289.mp3"
					playStatus={this.state.playStatus}
					playFromPosition={300}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
			</div>
		);
	}
}

export default Main
