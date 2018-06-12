import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'

import AddingModalIncome from '../AddingModalIncome'
import AddingModalExpense from '../AddingModalExpense'

export default class AddingModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      routes: [
        { key: 'expand', title: 'Expand' },
        { key: 'income', title: 'Income' },
      ],
    };
  }
  AddingModalIncomeTab = () => (
    <AddingModalIncome navigation={this.props.navigation} />
  );
  AddingModalExpenseTab = () => (
    <AddingModalExpense navigation={this.props.navigation} />
  );
  render () {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          income: this.AddingModalIncomeTab,
          expand: this.AddingModalExpenseTab,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    )
  }
}
