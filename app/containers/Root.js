// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Routes from '../routes';
import { Socket } from 'react-socket-io'

const uri = 'http://localhost:3000';
const options = { transports: ['websocket'], reconnection: true, autoConnect: true };
type RootType = {
	store: {},
	history: {}
};

export default function Root({ store, history }: RootType) {
	return (
		<MuiThemeProvider>
			<Socket uri={uri} options={options}>
				<Provider store={store}>
					<ConnectedRouter history={history}>
						<Routes />
					</ConnectedRouter>
				</Provider>
			</Socket>
		</MuiThemeProvider>
	);
}
