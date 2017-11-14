// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from '../components/Home';
import Main from '../components/Main';
import Setup from '../components/Setup';

import { getUser } from '../actions/user'

class HomePage extends Component {

	componentWillMount() {
		this.props.dispatch(getUser())
	}

	render() {
		const { user } = this.props
		if (user.isReceived) {
			return <Main {...this.props} />
		}
		if (user.error) {
			return <Setup {...this.props} />
		}
		return null
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
})

export default connect(mapStateToProps)(HomePage)
