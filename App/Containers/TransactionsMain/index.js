import React, { Component } from 'react'
import { ScrollView, Text, Image, View, FlatList, Platform, TouchableOpacity, Alert } from 'react-native'
import { ListItem } from 'native-base'
import Swipeable from 'react-native-swipeable';

// Styles
import styles from '../Styles/LaunchScreenStyles'
import CustomIcon from './../../Components/CustomIcon'
import { connect } from 'react-redux'
import { Colors, Metrics } from '../../Themes'

import { delCurrentTransactionFromStorage } from './../../Redux/asyncStorage/actions'

@connect(store => {
  return ({
    transactionsData: store.localData.transactionsData,
  })
})

export default class TransactionsMain extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSwiping: false,
      currentItem: null
    }
    this.rightButtons = [
      <TouchableOpacity onPress={() => this.deleteItem()} style={{ flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: 'red'}}>
          <Text>Delete</Text>
      </TouchableOpacity>
    ]
    this.renderFlatListItem = this.renderFlatListItem.bind(this)
  }
  deleteItem () {
    console.log(this.state.currentItem)
    if (this.state.currentItem && this.state.currentItem.date) {
      this.props.dispatch(delCurrentTransactionFromStorage({id: this.state.currentItem.date}))
      this.setState({
        isSwiping: false,
        currentItem: null
      })
    } else {
      Alert.alert(
        'Error',
      )
    }
  }

  renderTransactions () {
    if (this.props.transactionsData && Array.isArray(this.props.transactionsData) && this.props.transactionsData.length) {
      return (
        <FlatList
          keyExtractor={(item, i) => i}
          data={this.props.transactionsData}
          extraData={this.state}
          renderItem={this.renderFlatListItem}
          scrollEnabled={!this.state.isSwiping}
        />
      )
    } else {
      return (
        <View style={{height: Metrics.screenHeight, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Text>No transactions. Please add some</Text>
        </View>
      )
    }
  }
  renderFlatListItem ({item}) {
    return (
      <Swipeable rightButtons={this.rightButtons}
                 onSwipeStart={() => this.setState({isSwiping: true, currentItem: item})}
                 onSwipeRelease={() => this.setState({isSwiping: false})}
      >
        <ListItem style={{justifyContent: 'space-between'}}>
          <CustomIcon name={Platform.OS === 'ios' ? 'ios-' + item.type.iconName : 'md-' + item.type.iconName} size={26} color={Colors.notActiveTab} />
          <Text>{item.type.title}</Text>
          <Text style={item.expense ? {color: Colors.fire} : {color: Colors.activeTab}}>{item.expense ? '-' + item.data : item.data}</Text>
        </ListItem>
      </Swipeable>
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
