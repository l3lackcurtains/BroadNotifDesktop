import A from '../actions/index'

const initState = {
	isReceived: false,
	data: {},
	error: false,
}

/*
 ***************************************
 * add email reducer
 * *************************************
*/
const addEmailRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_ADD_EMAIL:
		return {
			...state,
			isReceived: false,
		}
	case A.REC_ADD_EMAIL:
		return {
			...state,
			isReceived: true,
			data: action.data,
		}
	case A.REC_ADD_EMAIL_ERR:
		return {
			...state,
			error: true,
			data: action.data,
		}
	case A.RESET_ADD_EMAIL:
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
 * remove email reducer
 * *************************************
*/
const removeEmailRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_REMOVE_EMAIL:
		return {
			...state,
			isReceived: false,
		}
	case A.REC_REMOVE_EMAIL:
		return {
			...state,
			isReceived: true,
			data: action.data,
		}
	case A.REC_REMOVE_EMAIL_ERR:
		return {
			...state,
			error: true,
			data: action.data,
		}
	case A.RESET_REMOVE_EMAIL:
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
 * get email reducer
 * *************************************
*/
const getEmailRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_GET_EMAIL:
		return {
			...state,
			isReceived: false,
		}
	case A.REC_GET_EMAIL:
		return {
			...state,
			isReceived: true,
			data: action.data,
		}
	case A.REC_GET_EMAIL_ERR:
		return {
			...state,
			error: true,
			data: action.data,
		}
	case A.RESET_GET_EMAIL:
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
	removeEmail: removeEmailRe,
	addEmail: addEmailRe,
	email: getEmailRe,
}
