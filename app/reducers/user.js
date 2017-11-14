import A from '../actions/index'

const initState = {
	isReceived: false,
	data: {},
	error: false,
}

/*
 ***************************************
 * add user reducer
 * *************************************
*/
const addUserRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_ADD_USER:
		return {
			...state,
			isReceived: false,
		}
	case A.REC_ADD_USER:
		return {
			...state,
			isReceived: true,
			data: action.data,
		}
	case A.REC_ADD_USER_ERR:
		return {
			...state,
			error: true,
			data: action.data,
		}
	case A.RESET_ADD_USER:
		return {
			isReceived: false,
			data: {},
			error: false,
		}
	default:
		return state
	}
}

/*
 ***************************************
 * remove user reducer
 * *************************************
*/
const removeUserRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_REMOVE_USER:
		return {
			...state,
			isReceived: false,
		}
	case A.REC_REMOVE_USER:
		return {
			...state,
			isReceived: true,
			data: action.data,
		}
	case A.REC_REMOVE_USER_ERR:
		return {
			...state,
			error: true,
			data: action.data,
		}
	case A.RESET_REMOVE_USER:
		return {
			isReceived: false,
			data: {},
			error: false,
		}
	default:
		return state
	}
}


/*
 ***************************************
 * get user reducer
 * *************************************
*/
const getUserRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_GET_USER:
		return {
			...state,
			isReceived: false,
		}
	case A.REC_GET_USER:
		return {
			...state,
			isReceived: true,
			data: action.data,
		}
	case A.REC_GET_USER_ERR:
		return {
			...state,
			error: true,
			data: action.data,
		}
	case A.RESET_GET_USER:
		return {
			isReceived: false,
			data: {},
			error: false,
		}
	default:
		return state
	}
}


export default {
	removeUser: removeUserRe,
	addUser: addUserRe,
	user: getUserRe,
}
