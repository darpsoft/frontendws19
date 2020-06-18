import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'

// LISTA DE REDUCERS
import covidReducer from './covidReducer'
import stateAppReducer from './stateAppReducer'
import loginReducer from './loginReducer'
import userDataReducer from './userDataReducer'
import registerReducer from './registerReducer'
import favoritesReducer from './favoritesReducer'

export default combineReducers({
  form: FormReducer,
  covidReducer,
  stateAppReducer,
  loginReducer,
  userDataReducer,
  registerReducer,
  favoritesReducer
})