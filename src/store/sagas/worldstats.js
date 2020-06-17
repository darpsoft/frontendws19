import { put, call, takeLatest } from 'redux-saga/effects'
import { GET_START_COVID, GET_SUCCESS_COVID, CHANGE_STATE_APP } from '../actions'
import fetchAPI from '../fetch'

function* getCovid ({ payload }){
  try {
    yield put({type: CHANGE_STATE_APP, payload: { loading: true }})

    const fetch = yield call(fetchAPI, 'get', 'https://api.covid19api.com/summary')
    yield put({type: GET_SUCCESS_COVID, payload: { 
      ...fetch, 
      Countries: fetch.Countries.sort((a, b) => parseInt(b.TotalConfirmed) - parseInt(a.TotalConfirmed)) // Ordenar SORT
    }})

    yield put({type: CHANGE_STATE_APP, payload: { loading: false }})
  } catch (error) {
    yield put({type: CHANGE_STATE_APP, payload: { loading: false }})
    console.log(error)
  }
}

export default function* covid() {
  yield takeLatest(GET_START_COVID, getCovid)
}