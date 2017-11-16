// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Grid } from 'react-flexbox-grid'
import { Event } from 'react-socket-io'
import Sound from 'react-sound'
import Moment from 'react-moment';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ReactHtmlParser from 'react-html-parser'
import styles from './MainContent.css';
import CircularProgress from 'material-ui/CircularProgress';
import { getInboxAction, getInboxResetAction, removeInboxAction, removeInboxResetAction } from '../actions/inbox'

class Main extends Component {
	constructor(props, context) {
		super(props, context);
		this.onMessage = this.onMessage.bind(this);
	}

	state = {
		playStatus: Sound.status.STOPPED,
		mails: []
	}

	componentWillMount() {
		this.props.dispatch(getInboxAction())
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.removeInbox.isReceived && nextProps.inbox.isReceived) {
			console.log('yeahhh')
			this.props.dispatch(getInboxResetAction())
		}
	}
	componentWillUnmount() {
		this.props.dispatch(getInboxResetAction())
		this.props.dispatch(removeInboxResetAction())
	}

	onMessage = (d) => {
		this.setState({
			playStatus: Sound.status.PLAYING,
		})
		this.props.dispatch(getInboxAction())
	}

	handleSongFinishedPlaying = () => {
		this.setState({
			playStatus: Sound.status.STOPPED,
		})
	}

	clearInbox = (e) => {
		e.preventDefault()
		this.props.dispatch(removeInboxAction())
	}


	render() {
		const { inbox } = this.props
		return (
			<div>
				<Grid>
					<Row>
						<Col xs={10} xsOffset={1}>
							<Row>
								<Col xs={10}>
									<p>App is running, You will receive notification instantly when new email is received.</p>
								</Col>
								<Col xs={2}>
									<div className={styles.clear}>
										<FlatButton
											label="Clear"
											secondary
											onClick={this.clearInbox}
										/>
									</div>
								</Col>
							</Row>
							<Row>
								{
									inbox.isLoading ? <Col xs={12}><div className={styles.loading}><CircularProgress size={80} thickness={5} /></div></Col> : null
								}
								{
									inbox.error ? <Col xs={12}><p className={styles.errMsg}>Something went wrong, Please restart the application.</p></Col> : null
								}
								{
									inbox.isReceived && inbox.data.map((m, i) => {
										return <Col xs={8} xsOffset={2} key={i} style={{ padding: '4px' }}>
											<Card>
												<CardHeader
													title={`From ${m.from}`}
													subtitle={<Moment interval={30000} fromNow>{m.date}</Moment>}
													actAsExpander
													showExpandableButton
												/>
												<CardText expandable>
													<b>{m.subject}</b>
													<p>{ReactHtmlParser(m.body)}</p>
												</CardText>
											</Card>
										</Col>
									})
								}
							</Row>
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

const mapStateToProps = (state) => ({
	inbox: state.inbox,
	removeInbox: state.removeInbox,
})

export default connect(mapStateToProps)(Main)
