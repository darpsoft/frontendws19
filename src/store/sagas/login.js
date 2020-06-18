import { put, call, takeLatest } from 'redux-saga/effects'
import { addCookies } from '../../cookies'
import { VERIFY_LOGIN_START, VERIFY_LOGIN_FAILED, VERIFY_LOGIN_SUCCESS, UPDATE_USER_DATA  } from '../actions'
import fetchAPI from '../fetch'

function* listeningLogin ({ payload, resolve, reject }){
  try {
    const fetch = yield call(fetchAPI, 'post', 'https://ws19.herokuapp.com/loginUser', payload)
    if(fetch.code !== 200){ 
      yield put({ type: VERIFY_LOGIN_FAILED })
      yield call(reject, { error: 'VERIFY_LOGIN_FAILED' })
      return
    }
    yield put({type: UPDATE_USER_DATA, payload: fetch.body})
    localStorage.setItem('USER_DATA', JSON.stringify({...fetch.body, email: payload.email}))
    addCookies('isAuth', 'true')

    yield call(resolve, { state: 200 })
    yield put({type: VERIFY_LOGIN_SUCCESS})

  } catch (error) {
    yield call(reject, { error: 'ERROR_SERVIDOR' })
    yield put({ type: VERIFY_LOGIN_FAILED })
  }
}

export default function* login() {
  yield takeLatest(VERIFY_LOGIN_START, listeningLogin)
}