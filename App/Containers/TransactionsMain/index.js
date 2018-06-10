import React, { Component } from 'react'
import { ScrollView, Text, Image, View, FlatList, Platform } from 'react-native'
import { ListItem } from 'native-base'

// Styles
import styles from '../Styles/LaunchScreenStyles'
import CustomIcon from './../../Components/CustomIcon'
import { connect } from 'react-redux'
import { Colors } from '../../Themes'

@connect(store => {
  return ({
    transactionsData: store.localData.transactionsData,
  })
})

export default class TransactionsMain extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }
  renderTransactions(){
    if(this.props.transactionsData && Array.isArray(this.props.transactionsData) && this.props.transactionsData.length){
      return(
        <FlatList
          keyExtractor={(item, i) => i}
          data={this.props.transactionsData}
          renderItem={this.renderFlatListItem}
        />
      )
    }
  }
  renderFlatListItem({item}){
    return(
      <ListItem style={{justifyContent: 'space-between'}}>
        <CustomIcon name={Platform.OS === 'ios' ? 'ios-' + item.type.iconName : 'md-' + item.type.iconName} size={26} color={Colors.notActiveTab} />
        <Text>{item.type.title}</Text>
        <Text style={item.expense ? {color: Colors.fire} : {color: Colors.activeTab}}>{item.expense ? '-' + item.data : item.data}</Text>
      </ListItem>
    )
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        {this.renderTransactions()}
      </View>
    )
  }
}
