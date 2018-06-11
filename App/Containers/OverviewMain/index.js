import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'

import BarChart from './../../Components/BarChart'

// Styles
import styles from '../Styles/LaunchScreenStyles'

@connect(store => {
  return ({
    transactionsData: store.localData.transactionsData,
  })
})

export default class OverviewMain extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {this.props.transactionsData ?
            <BarChart data={this.props.transactionsData}/>
            :
            null
          }

        </ScrollView>
      </View>
    )
  }
}
