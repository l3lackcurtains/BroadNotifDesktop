import A from '../actions/index'

const initState = {
	isReceived: false,
	isLoading: false,
	data: {},
	error: false,
}

/*
 ***************************************
 * remove inbox reducer
 * *************************************
*/
const removeInboxRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_REMOVE_INBOX:
		return {
			...state,
			isReceived: false,
		}
	case A.REC_REMOVE_INBOX:
		return {
			...state,
			isReceived: true,
			data: action.data,
		}
	case A.REC_REMOVE_INBOX_ERR:
		return {
			...state,
			error: true,
			data: action.data,
		}
	case A.RESET_REMOVE_INBOX:
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
 * get inbox reducer
 * *************************************
*/
const getInboxRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_GET_INBOX:
		return {
			...state,
			isReceived: false,
			isLoading: true,
		}
	case A.REC_GET_INBOX:
		return {
			...state,
			isReceived: true,
			data: action.data,
			isLoading: false,
		}
	case A.REC_GET_INBOX_ERR:
		return {
			...state,
			error: true,
			data: action.data,
			isLoading: false,
		}
	case A.RESET_GET_INBOX:
		return {
			isReceived: false,
			data: {},
			error: false,
			isLoading: false,
		}
	default:
		return state
	}
}


export default {
	removeInbox: removeInboxRe,
	inbox: getInboxRe,
}
