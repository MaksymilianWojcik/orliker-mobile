import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from './Stores'
import RootScreen from './Containers/Root/RootScreen'
import SplashScreen from './Containers/SplashScreen/SplashScreen';

const { store, persistor } = createStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<SplashScreen/>} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    )
  }
}
