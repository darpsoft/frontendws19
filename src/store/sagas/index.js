import { all } from 'redux-saga/effects'

import worldstats from './worldstats'
import login from './login'

export default function* rootSaga() {
  yield all([
    worldstats(),
    login()
  ])
}