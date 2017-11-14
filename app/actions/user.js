import A from './index';
import axios from 'axios';
import c from '../utils/config'
/*
 ***************************************
 * Add User Action
 * *************************************
*/
const addUserReq = data => ({
	type: A.REQ_ADD_USER,
	data,
})

const addUserSuccess = data => ({
	type: A.REC_ADD_USER,
	data,
})

const addUserErr = data => ({
	type: A.REC_ADD_USER_ERR,
	data,
})

const addUserReset = () => ({
	type: A.RESET_ADD_USER,
})

/*
 ***************************************
 * Delete User Action
 * *************************************
*/
const removeUserReq = query => ({
	type: A.REQ_REMOVE_USER,
	query,
})

const removeUserSuccess = data => ({
	type: A.REC_REMOVE_USER,
	data,
})

const removeUserErr = data => ({
	type: A.REC_REMOVE_USER_ERR,
	data,
})

const removeUserReset = () => ({
	type: A.RESET_REMOVE_USER,
})

/*
 ***************************************
 * Get User Action
 * *************************************
*/
const getUserReq = query => ({
	type: A.REQ_GET_USER,
	query,
})

const getUserSuccess = data => ({
	type: A.REC_GET_USER,
	data,
})

const getUserErr = data => ({
	type: A.REC_GET_USER_ERR,
	data,
})

const getUserReset = () => ({
	type: A.RESET_GET_USER,
})


// add user
export const addUserAction = data => dispatch => {
	dispatch(addUserReq());
	const url = `${c.apiPage}/api/users`;
	return axios({
		method: 'post',
		url,
		data
		}).then((res) => {
		if (res.data.success) {
			dispatch(addUserSuccess(res.data.message))
		} else {
			dispatch(addUserErr(res.data.message))
		}
	}).catch(err => dispatch(addUserErr(err)))
}

// remove user
export const removeUserAction = () => dispatch => {
	dispatch(removeUserReq());
	const url = `${c.apiPage}/api/users`;
	return axios({
		method: 'delete',
		url,
	}).then((res) => {
		if (res.data.success) {
			dispatch(removeUserSuccess(res.data.message))
		} else {
			dispatch(removeUserErr(res.data.message))
		}
	}).catch(err => dispatch(removeUserErr(err)))
}

// get user
export const getUser = () => dispatch => {
	dispatch(getUserReq());
	const url = `${c.apiPage}/api/users`;
	return axios({
		method: 'get',
		url,
	}).then((res) => {
		if (res.data.success) {
			if (typeof res.data.message === 'undefined') {
				dispatch(getUserErr(res.data.message))
			} else {
				dispatch(getUserSuccess(res.data.message))
			}
		} else {
			dispatch(getUserErr(res.data.message))
		}
	}).catch(err => dispatch(getUserErr(err)))
}
