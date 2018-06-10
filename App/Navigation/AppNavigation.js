import { StackNavigator } from 'react-navigation'

import LaunchScreen from '../Containers/LaunchScreen'
import TabNavigation from './TabNavigation'

const PrimaryNav = StackNavigator(
  {
    MainScreen: {screen: LaunchScreen},
    TabNavigation: {screen: TabNavigation}
  },
  {
    initialRouteName: 'TabNavigation',
    headerMode: 'none'
  }
)

export default PrimaryNav
