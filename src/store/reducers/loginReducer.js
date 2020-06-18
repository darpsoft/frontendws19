import { loginConstants } from '../constants'
import { VERIFY_LOGIN_START, VERIFY_LOGIN_FAILED, VERIFY_LOGIN_SUCCESS } from '../actions'

export default (state = loginConstants, action) => {
  switch (action.type) {
    case VERIFY_LOGIN_START:
      return { loading: true, loginError: false }
    case VERIFY_LOGIN_SUCCESS:
      return loginConstants 
    case VERIFY_LOGIN_FAILED:
      return { loading: false, loginError: true }
    default:
      return state
  }
}