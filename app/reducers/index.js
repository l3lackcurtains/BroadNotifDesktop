// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import userRe from './user'

const rootReducer = combineReducers({
	router,
	...userRe,
});

export default rootReducer;
