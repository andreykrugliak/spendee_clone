import React, { Component } from 'react'
import { Text, View, Platform, Alert } from 'react-native'
import { Button, Content, Input, Form, Item, Label} from 'native-base'
import { connect } from 'react-redux'
import DatePicker from 'react-native-datepicker'
import moment from 'moment/moment'

import CustomIcon from './../../Components/CustomIcon'

import { setCurrentTransactionToStorage, setNewCategoryIncToStorage } from './../../Redux/asyncStorage/actions'
// Styles
import styles from '../AddingModal/styles'
import { Colors } from './../../Themes'

@connect(store => {
  return ({
    transationsTypesIncome: store.localData.transationsTypesIncome,
  })
})

export default class AddingModalExpense extends Component {
  constructor (props) {
    super(props)
    this.state = {
      transationsTypesIncome: null,
      selectedType: null,
      text: null,
      date: moment().format(),
      newCategory: null
    };
  }
  componentDidMount () {
    this.setState({transationsTypesIncome: this.props.transationsTypesIncome})
  }
  createTransaction () {
    if (this.state.text && this.state.selectedType && this.state.date) {
      this.props.dispatch(setCurrentTransactionToStorage({type: this.state.selectedType, data: parseInt(this.state.text), expense: false, date: this.state.date}))
      Alert.alert(
        'Transaction successfully added'
      )
      this.setState({ selectedType: null,
        text: null,
        date: moment().format(),
        newCategory: null})
    } else {
      Alert.alert(
        'Please fill in the fields'
      )
    }
  }
  selectType (item) {
    if (!this.state.selectedType || (this.state.selectedType && this.state.selectedType.id !== item.id)) {
      this.setState({selectedType: item})
    }else{
      this.setState({selectedType: null})
    }
  }
  renderListOfTypes () {
    if(this.state.transationsTypesIncome && Array.isArray(this.state.transationsTypesIncome)){
      return this.state.transationsTypesIncome.map((item, index) => {
        return(
          <Button key={index} style={[this.state.selectedType && this.state.selectedType.id === item.id ? styles.styleBtnActive : styles.styleBtnNonActive, {paddingHorizontal: 5,
            marginRight: 10, marginBottom: 10}]} onPress={() => this.selectType(item)}>
            <CustomIcon name={Platform.OS === 'ios' ? 'ios-' + item.iconName : 'md-' + item.iconName} size={26} color={Colors.notActiveTab} />
            <Text style={styles.notActiveTab}>{item.title}</Text>
          </Button>
        )
      })
    }
  }
  showAddForm () {
    this.setState({addForm: true})
  }
  createNewCategory () {
    if (this.state.newCategory) {
      this.props.dispatch(setNewCategoryIncToStorage({
        id: this.state.newCategory.replace(/\s/g, '').toLowerCase(),
        title: this.state.newCategory,
        iconName: 'contact'
      }))
      this.setState({transationsTypesIncome: this.props.transationsTypesIncome, addForm: false})
    }
  }
  enteringTextHandler (text, category) {
    this.setState({[category]: text})
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Content>
          <View style={styles.inputBlock}>
            <Form style={styles.inputBlockForm}>
              <Item>
                <Label>USD</Label>
                <Input underlineColorAndroid='transparent'
                       onChangeText={(text) => this.enteringTextHandler(text, 'text')}
                       placeholder={'Type here'}
                       keyboardType={'numeric'}
                       value={this.state.text}
                       style={styles.input}/>
              </Item>
            </Form>
          </View>
          <View style={styles.typesContainer}>
            {this.renderListOfTypes()}
            <View style={styles.fullScreenCentered}>
              <Button transparent onPress={() => { this.showAddForm() }}>
                <CustomIcon name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'} size={26} color={Colors.notActiveTab} />
              </Button>

            </View>
            {this.state.addForm ?
              <View style={{width: '100%'}}>
                <Form style={styles.inputBlockForm}>
                  <Item floatingLabel>
                    <Label>New category</Label>
                    <Input
                      onChangeText={(text) => this.enteringTextHandler(text, 'newCategory')}
                      value={this.state.newCategory}/>
                  </Item>
                  <Button onPress={() => {this.createNewCategory()}} success block>
                    <Text>Apply</Text>
                  </Button>
                </Form>
              </View>
              :
              null
            }
          </View>
          {
            this.state.date ?
              <DatePicker
                style={{width: 200, paddingLeft: 20}}
                date={this.state.date}
                mode="datetime"
                placeholder="select date"
                format="YYYY-MM-DD h:mm"
                minDate={moment().subtract(1, 'months').format()}
                maxDate={moment().format()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
              :
              null
          }

        </Content>
        <View>
          <Button onPress={() => { this.createTransaction() }} full success>
            <Text>Add transaction</Text>
          </Button>
          <Button full danger onPress={() => { this.props.navigation.navigate('TransactionsMain') }}>
            <Text>Cancel</Text>
          </Button>
        </View>
      </View>
    )
  }
}
