import { createAppContainer, createStackNavigator } from 'react-navigation'
import ExampleScreen from '../Containers/Example/ExampleScreen'
import SplashScreen from '../Containers/SplashScreen/SplashScreen'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: ExampleScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
