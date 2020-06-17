import { put, call, takeLatest } from 'redux-saga/effects'
import { VERIFY_LOGIN_START, CHANGE_STATE_APP } from '../actions'
import fetchAPI from '../fetch'

function* listeningLogin ({ payload }){
  try {
    yield put({type: CHANGE_STATE_APP, payload: { loading: true }})
    const fetch = yield call(fetchAPI, 'post', 'https://ws19.herokuapp.com/loginUser', payload)
    console.log(fetch)
    // yield put({type: GET_SUCCESS_COVID, payload: { data: fetch }})
    // yield put({type: CHANGE_STATE_APP, payload: { loading: false }})
  } catch (error) {
    yield put({type: CHANGE_STATE_APP, payload: { loading: false }})
  }
}

export default function* login() {
  yield takeLatest(VERIFY_LOGIN_START, listeningLogin)
}