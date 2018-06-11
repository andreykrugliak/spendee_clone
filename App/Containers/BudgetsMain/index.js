import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../../Themes'

// Styles
import styles from '../Styles/LaunchScreenStyles'

export default class BudgetsMain extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Under construction
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
