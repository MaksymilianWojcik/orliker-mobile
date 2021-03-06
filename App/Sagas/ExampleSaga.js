import { put, call } from 'redux-saga/effects'
import ExampleActions from '../Stores/Example/Actions'
import { userService } from '../Services/UserService'

export function* fetchUser() {
  yield put(ExampleActions.fetchUserLoading())

  const user = yield call(userService.fetchUser)
  if (user) {
    yield put(ExampleActions.fetchUserSuccess(user))
  } else {
    yield put(
      ExampleActions.fetchUserFailure('There was an error while fetching user informations.')
    )
  }
}
