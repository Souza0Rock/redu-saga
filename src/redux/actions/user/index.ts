// /* eslint-disable no-labels */
// /* eslint-disable @typescript-eslint/no-unused-expressions */
// /* eslint-disable no-lone-blocks */
// /* eslint-disable no-unreachable */
// /* eslint-disable no-restricted-globals */
// /* eslint-disable no-unused-labels */
// import * as types from '../../types'

// export type UserType = {
//     name?: string;
//     avatar_url?: string
// }

// export function getUserRequest(name: string) {
//     type: string
//     payload: string
// } {
//     return{
//         type: types.GET_USER_REQUEST,
//         payload: name
//     }
// }

// export function getUserSuccess(user: UserType) {
//     type: string
//     payload: UserType
// } {
//     return{
//         type: types.GET_USER_SUCCESS,
//         payload: user
//     }
// }

// export function GET_USER_FAILURE() {
//     type: string
// } {
//     return{
//         type: types.GET_USER_FAILURE
//     }
// }

import * as types from '../../types';

export type UserType = {
  name?: string;
  avatar_url?: string;
  message: string;
};

export function getUserRequest(name: string) {
  return {
    type: types.GET_USER_REQUEST,
    payload: name,
  };
}

export function getUserSuccess(user: UserType) {
  return {
    type: types.GET_USER_SUCCESS,
    payload: user,
  };
}

export function getUserFailure(error: UserType) {
  return {
    type: types.GET_USER_FAILURE,
    payload: error
  };
}