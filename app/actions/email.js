import A from './index';
import axios from 'axios';
import c from '../utils/config'
/*
 ***************************************
 * Add Email Action
 * *************************************
*/
const addEmailReq = data => ({
	type: A.REQ_ADD_EMAIL,
	data,
})

const addEmailSuccess = data => ({
	type: A.REC_ADD_EMAIL,
	data,
})

const addEmailErr = data => ({
	type: A.REC_ADD_EMAIL_ERR,
	data,
})

const addEmailReset = () => ({
	type: A.RESET_ADD_EMAIL,
})

/*
 ***************************************
 * Delete Email Action
 * *************************************
*/
const removeEmailReq = query => ({
	type: A.REQ_REMOVE_EMAIL,
	query,
})

const removeEmailSuccess = data => ({
	type: A.REC_REMOVE_EMAIL,
	data,
})

const removeEmailErr = data => ({
	type: A.REC_REMOVE_EMAIL_ERR,
	data,
})

const removeEmailReset = () => ({
	type: A.RESET_REMOVE_EMAIL,
})

/*
 ***************************************
 * Get Email Action
 * *************************************
*/
const getEmailReq = query => ({
	type: A.REQ_GET_EMAIL,
	query,
})

const getEmailSuccess = data => ({
	type: A.REC_GET_EMAIL,
	data,
})

const getEmailErr = data => ({
	type: A.REC_GET_EMAIL_ERR,
	data,
})

const getEmailReset = () => ({
	type: A.RESET_GET_EMAIL,
})


// add user
export const addEmailAction = data => dispatch => {
	dispatch(addEmailReq());
	const url = `${c.apiPage}/api/emails`;
	return axios({
		method: 'post',
		url,
		data
		}).then((res) => {
		if (res.data.success) {
			dispatch(addEmailSuccess(res.data.message))
		} else {
			dispatch(addEmailErr(res.data.message))
		}
	}).catch(err => dispatch(addEmailErr(err)))
}

// remove user
export const removeEmailAction = (id) => dispatch => {
	dispatch(removeEmailReq());
	const url = `${c.apiPage}/api/emails/${id}`;
	return axios({
		method: 'delete',
		url,
	}).then((res) => {
		if (res.data.success) {
			dispatch(removeEmailSuccess(res.data.message))
		} else {
			dispatch(removeEmailErr(res.data.message))
		}
	}).catch(err => dispatch(removeEmailErr(err)))
}

// get user
export const getEmail = () => dispatch => {
	dispatch(getEmailReq());
	const url = `${c.apiPage}/api/emails`;
	return axios({
		method: 'get',
		url,
	}).then((res) => {
		if (res.data.success) {
			dispatch(getEmailSuccess(res.data.message))
		} else {
			dispatch(getEmailErr(res.data.message))
		}
	}).catch(err => dispatch(getEmailErr(err)))
}
