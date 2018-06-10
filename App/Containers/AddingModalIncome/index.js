import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TextInput, Dimensions, Platform } from 'react-native'
import { Button, Footer, Content} from 'native-base'
import { connect } from 'react-redux'
import CustomIcon from './../../Components/CustomIcon'

// Styles
import styles from '../AddingModal/styles'
import { Colors, Metrics } from './../../Themes'

@connect(store => {
  return ({
    transationsTypesIncome: store.localData.transationsTypesIncome,
  })
})


export default class AddingModalExpense extends Component {
  constructor (props) {
    super(props)
    this.state = {

    };
  }
  renderListOfTypes () {
    return this.props.transationsTypesIncome.map(item => {
      return(
        <View style={styles.styleBtn}>
          <CustomIcon name={Platform.OS === 'ios' ? 'ios-' + item.iconName : 'md-' + item.iconName} size={26} color={Colors.notActiveTab} />
          <Text style={styles.notActiveTab}>{item.title}</Text>
        </View>
      )
    })
  }
  render () {
    return (
      <View style={styles.mainContainer}>

        <Content>
          <View style={{backgroundColor: 'red', height: 100}}>
            <TextInput defaultValue={'0'} keyboardType={'numeric'}></TextInput>
          </View>

          {this.renderListOfTypes()}
        </Content>
        <View>
          <Button full success>
            <Text>Add transaction</Text>
          </Button>
          <Button full danger>
            <Text>Cancel</Text>
          </Button>
        </View>
      </View>
    )
  }
}

