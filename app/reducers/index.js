// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import userRe from './user'
import emailRe from './email'
import inboxRe from './inbox'

const rootReducer = combineReducers({
	router,
	...userRe,
	...emailRe,
	...inboxRe,
});

export default rootReducer;
