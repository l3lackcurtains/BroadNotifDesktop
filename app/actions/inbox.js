import A from './index';
import axios from 'axios';
import c from '../utils/config'
/*
 ***************************************
 * Delete Inbox Action
 * *************************************
*/
const removeInboxReq = query => ({
	type: A.REQ_REMOVE_INBOX,
	query,
})

const removeInboxSuccess = data => ({
	type: A.REC_REMOVE_INBOX,
	data,
})

const removeInboxErr = data => ({
	type: A.REC_REMOVE_INBOX_ERR,
	data,
})

const removeInboxReset = () => ({
	type: A.RESET_REMOVE_INBOX,
})

/*
 ***************************************
 * Get Inbox Action
 * *************************************
*/
const getInboxReq = query => ({
	type: A.REQ_GET_INBOX,
	query,
})

const getInboxSuccess = data => ({
	type: A.REC_GET_INBOX,
	data,
})

const getInboxErr = data => ({
	type: A.REC_GET_INBOX_ERR,
	data,
})

const getInboxReset = () => ({
	type: A.RESET_GET_INBOX,
})

// remove user
export const removeInboxAction = () => dispatch => {
	dispatch(removeInboxReq());
	const url = `${c.apiPage}/api/inbox`;
	return axios({
		method: 'delete',
		url,
	}).then((res) => {
		if (res.data.success) {
			dispatch(removeInboxSuccess(res.data.message))
		} else {
			dispatch(removeInboxErr(res.data.message))
		}
	}).catch(err => dispatch(removeInboxErr(err)))
}

// get user
export const getInbox = () => dispatch => {
	dispatch(getInboxReq());
	const url = `${c.apiPage}/api/inbox`;
	return axios({
		method: 'get',
		url,
	}).then((res) => {
		if (res.data.success) {
			dispatch(getInboxSuccess(res.data.message))
		} else {
			dispatch(getInboxErr(res.data.message))
		}
	}).catch(err => dispatch(getInboxErr(err)))
}
