export const GET_START_COVID = 'GET_START_COVID'
export const GET_SUCCESS_COVID = 'GET_SUCCESS_COVID'

export const CHANGE_STATE_APP = 'CHANGE_STATE_APP'

export const VERIFY_LOGIN_START = 'VERIFY_LOGIN_START'
export const VERIFY_LOGIN_SUCCESS = 'VERIFY_LOGIN_SUCCESS'

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

export const UPDATE_LOGIN = 'UPDATE_LOGIN'

// MODULO HOME, GET STATS COVID
export const getStartCovid = payload => ({
  type: GET_START_COVID,
  ...payload
})
export const getSuccessCovid = payload => ({
  type: GET_SUCCESS_COVID,
  ...payload
})

// MODULO REGISTRO
export const registerStart = payload => ({
  type: REGISTER_START,
  ...payload
})
export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  ...payload
})

// MODULO LOGIN
export const verifyLoginStart = payload => ({
  type: VERIFY_LOGIN_START,
  ...payload
})
export const verifyLoginSuccess = payload => ({
  type: VERIFY_LOGIN_SUCCESS,
  ...payload
})

export const changeStateApp = payload => ({
  type: CHANGE_STATE_APP,
  ...payload
})

export const updateLogin = payload => ({
  type: UPDATE_LOGIN,
  ...payload
})