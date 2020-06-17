import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'

// LISTA DE REDUCERS
import covidReducer from './covidReducer'
import stateAppReducer from './stateAppReducer'
import loginReducer from './loginReducer'

export default combineReducers({
  form: FormReducer,
  covidReducer,
  stateAppReducer,
  loginReducer
})