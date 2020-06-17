import { covidConstanst } from '../constants'
import { GET_SUCCESS_COVID } from '../actions'

export default (state = covidConstanst, action) => {
  switch(action.type){
    case GET_SUCCESS_COVID:
      return { ...state, ...action.payload }
    default: 
      return state
  }
}