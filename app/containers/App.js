// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import NavBar from './NavBar'

export default class App extends Component {
	props: {
		children: Children
	};

	render() {
		return (
			<div>
				<NavBar />
				{this.props.children}
			</div>
		);
	}
}
