import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from '../Stores/Example/Actions'
import { StartupTypes } from '../Stores/Startup/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
  ])
}
