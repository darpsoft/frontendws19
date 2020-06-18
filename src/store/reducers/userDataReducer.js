import { loginConstants } from '../constants'
import { VERIFY_LOGIN_START, VERIFY_LOGIN_FAILED } from '../actions'

export default (state = loginConstants, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA':
      return { ...state, ...action.payload }
    default:
      return state
  }
}