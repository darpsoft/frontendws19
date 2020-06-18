import { all } from 'redux-saga/effects'

import worldstats from './worldstats'
import login from './login'
import register from './register'

export default function* rootSaga() {
  yield all([
    worldstats(),
    login(),
    register()
  ])
}