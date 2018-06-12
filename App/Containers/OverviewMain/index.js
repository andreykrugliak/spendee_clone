import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'

import BarChart from './../../Components/BarChart'

// Styles
import styles from '../Styles/LaunchScreenStyles'
import { Metrics } from '../../Themes'



@connect(store => {
  return ({
    transactionsData: store.localData.transactionsData,
  })
})

export default class OverviewMain extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {this.props.transactionsData && Array.isArray(this.props.transactionsData) && this.props.transactionsData.length ?
            <BarChart data={this.props.transactionsData}/>
            :
            <View style={styles.underConstructionContainer}>
              <Text>No transactions. Please add some</Text>
            </View>
          }

        </ScrollView>
      </View>
    )
  }
}
