import * as UserApiUtil from '../util/user_api_util.js';
import { RECEIVE_ALL_COMMENTS } from './comment_actions.js';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

const receiveUser = user => {
    return ({
        type: RECEIVE_USER,
        user
    })
}

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const fetchAllUsers = () => dispatch => {
    return UserApiUtil.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
}

export const fetchUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}

export const updateUser = user => dispatch => {
    return UserApiUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
}