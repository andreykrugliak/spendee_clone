import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  render () {
    console.disableYellowBox = true;
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' hidden />
        <ReduxNavigation />
      </View>
    )
  }
}

export default RootContainer;
