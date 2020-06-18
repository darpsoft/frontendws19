import { registerConstants } from '../constants'
import { REGISTER_START, REGISTER_FAILED, REGISTER_SUCCESS } from '../actions'

export default (state = registerConstants, action) => {
  switch (action.type) {
    case REGISTER_START:
      return { loading: true, emailError: false }
    case REGISTER_SUCCESS:
      return registerConstants 
    case REGISTER_FAILED:
      return { loading: false, emailError: true }
    default:
      return state
  }
}