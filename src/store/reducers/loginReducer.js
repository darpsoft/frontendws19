import { loginConstants } from '../constants'
import { UPDATE_LOGIN } from '../actions'

export default (state = loginConstants, action) => {
  switch(action.type){
    case UPDATE_LOGIN:
      return { ...state, ...action.payload }
    default: 
      return state
  }
}