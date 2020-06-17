import { stateAppConstanst } from '../constants'
import { CHANGE_STATE_APP } from '../actions'

export default (state = stateAppConstanst, action) => {
  switch(action.type){
    case CHANGE_STATE_APP:
      return { ...state, ...action.payload }
    default: 
      return state
  }
}