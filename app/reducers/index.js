// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import userRe from './user'
import emailRe from './email'

const rootReducer = combineReducers({
	router,
	...userRe,
	...emailRe,
});

export default rootReducer;
