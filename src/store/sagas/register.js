import { put, call, takeLatest } from 'redux-saga/effects'
import { REGISTER_START, CHANGE_STATE_APP } from '../actions'
import fetchAPI from '../fetch'

function* listeningRegister ({ payload }){
  try {
    yield put({type: CHANGE_STATE_APP, payload: { loading: true }})
    const fetch = yield call(fetchAPI, 'post', 'https://jsonplaceholder.cypress.io/todos/1', payload)
    // yield put({type: GET_SUCCESS_COVID, payload: { data: fetch }})
    // yield put({type: CHANGE_STATE_APP, payload: { loading: false }})
  } catch (error) {
    yield put({type: CHANGE_STATE_APP, payload: { loading: false }})
  }
}

export default function* login() {
  yield takeLatest(REGISTER_START, listeningRegister)
}