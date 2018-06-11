import React from 'react'
import {TabNavigator, StackNavigator} from 'react-navigation'
import TabNavigation from '../Containers/TabNavigation'
import LaunchScreen from '../Containers/LaunchScreen'
import TransactionsMain from '../Containers/TransactionsMain'
import AddingModal from '../Containers/AddingModal'
import OverviewMain from '../Containers/OverviewMain'
import BudgetsMain from '../Containers/BudgetsMain'
import SettingsMain from '../Containers/SettingsMain'

const TransactionsStack = StackNavigator({
    TransactionsMain: {
      screen: TransactionsMain,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
  },
  {
    initialRouteName: 'TransactionsMain',
    animationEnabled: false
  }
)


const OverviewStack = StackNavigator({
    OverviewMain: {
      screen: OverviewMain,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
  },
  {
    initialRouteName: 'OverviewMain',
    animationEnabled: false
  }
)
const AddStack = StackNavigator({
    AddingModal: {
      screen: AddingModal,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
        tabBarVisible: false
      }
    },
  },
  {
    initialRouteName: 'AddingModal',
    animationEnabled: false,
    mode: 'modal',
    headerMode: 'none',
  }
)
const BudgetsStack = StackNavigator({
    BudgetsMain: {
      screen: BudgetsMain,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
  },
  {
    initialRouteName: 'BudgetsMain',
    animationEnabled: false
  }
)
const SettingsStack = StackNavigator({
    SettingsMain: {
      screen: SettingsMain,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
  },
  {
    initialRouteName: 'SettingsMain',
    animationEnabled: false
  }
)

const NavigationTabs = TabNavigator(
  {
    TransactionsTab: {screen: TransactionsStack},
    OverviewTab: {screen: OverviewStack},
    AddTab: {screen: AddStack},
    BudgetsTab: {screen: BudgetsStack},
    SettingsTab: {screen: SettingsStack}
  },
  {

    initialRouteName: 'TransactionsTab',

    animationEnabled: false,
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63'
    },
    tabBarComponent: props => <TabNavigation {...props} />
  }
);

export default NavigationTabs
