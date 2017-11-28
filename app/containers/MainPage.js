// @flow
import React, { Component } from 'react';
import MainContent from '../components/MainContent';

export default class MainPage extends Component {
	render() {
		return (
			<MainContent {...this.props} />
		);
	}
}
