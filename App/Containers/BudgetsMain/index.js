import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images, Metrics } from '../../Themes'

// Styles
import styles from '../Styles/LaunchScreenStyles'

export default class BudgetsMain extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.underConstructionContainer}>
            <Text>Under construction</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
