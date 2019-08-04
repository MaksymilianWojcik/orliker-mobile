import { put } from 'redux-saga/effects'
import ExampleActions from '../Stores/Example/Actions'
import NavigationService from '../Services/NavigationService'


export function* startup() {
  yield put(ExampleActions.fetchUser())
  NavigationService.navigateAndReset('MainScreen')
}
