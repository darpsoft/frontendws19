import { put, call, takeLatest } from 'redux-saga/effects'
import { addCookies } from '../../cookies'
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILED } from '../actions'
import fetchAPI from '../fetch'

function* listeningRegister ({ payload, resolve, reject }){
  try {
    const fetch = yield call(fetchAPI, 'post', 'https://ws19.herokuapp.com/registerUser', payload)
    if(fetch.code !== 200){ 
      yield put({ type: REGISTER_FAILED })
      yield call(reject, { error: 'REGISTER_FAILED' })
      return
    }
    
    localStorage.setItem('USER_DATA', JSON.stringify(payload))
    addCookies('isAuth', 'true')
    
    yield call(resolve, { state: 200 })
    yield put({type: REGISTER_SUCCESS})
    
  } catch (error) {
    yield call(reject, { error: 'ERROR_SERVIDOR' })
    yield put({ type: REGISTER_FAILED })
  }
}

export default function* register() {
  yield takeLatest(REGISTER_START, listeningRegister)
}