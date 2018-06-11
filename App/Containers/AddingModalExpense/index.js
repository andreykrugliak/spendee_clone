import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Dimensions, Platform } from 'react-native'
import { Button, Footer, Content, Input, Form, Item, Label} from 'native-base'
import { connect } from 'react-redux'
import CustomIcon from './../../Components/CustomIcon'
import moment from 'moment'

import DatePicker from 'react-native-datepicker'

import { setCurrentTransactionToStorage, setNewCategoryExpToStorage } from './../../Redux/asyncStorage/actions'

// Styles
import styles from '../AddingModal/styles'
import { Colors, Metrics } from './../../Themes'

@connect(store => {
  return ({
    transationsTypesExpense: store.localData.transationsTypesExpense,
  })
})


export default class AddingModalExpense extends Component {
  constructor (props) {
    super(props)
    this.state = {
      transationsTypesExpense: null,
      selectedType: null,
      text: null,
      date: moment().format(),
      newCategory: null
    };
  };
  componentDidMount(){
    this.setState({transationsTypesExpense: this.props.transationsTypesExpense})
  }
  createTransaction () {
    if(this.state.text && this.state.selectedType && this.state.date){
      this.props.dispatch(setCurrentTransactionToStorage({type: this.state.selectedType, data: parseInt(this.state.text), expense: true, date: this.state.date}))
    }
  }
  createNewCategory () {
    if(this.state.newCategory){
      this.props.dispatch(setNewCategoryExpToStorage({
        id: this.state.newCategory.replace(/\s/g, '').toLowerCase(),
        title: this.state.newCategory,
        iconName: 'contact'
      }))
      this.setState({transationsTypesExpense: this.props.transationsTypesExpense, addForm: false})
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
    if(this.state.transationsTypesExpense && Array.isArray(this.state.transationsTypesExpense)){
      return this.state.transationsTypesExpense.map(item => {
        return(
          <Button style={[this.state.selectedType && this.state.selectedType.id === item.id ? styles.styleBtnActive : styles.styleBtnNonActive, {marginBottom: 10, paddingHorizontal: 5}]} onPress={() => this.selectType(item)}>
            <CustomIcon name={Platform.OS === 'ios' ? 'ios-' + item.iconName : 'md-' + item.iconName} size={26} color={Colors.notActiveTab} />
            <Text style={styles.notActiveTab}>{item.title}</Text>
          </Button>
        )
      })
    }
  }
  enteringTextHandler (text, category) {
    this.setState({[category]: text})
  }
  showAddForm() {
    this.setState({addForm: true})
  }
  render () {
    return (
      <View style={styles.mainContainer}>

        <Content>
          <View style={{backgroundColor: 'red', height: 100}}>
            <Form style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Item>
                <Label>USD</Label>
                <Input {...this.props}
                       underlineColorAndroid='transparent'
                       onChangeText={(text) => this.enteringTextHandler(text, 'text')}
                       defaultValue={0}
                       placeholder={'Type here'}
                       keyboardType={'numeric'}
                       value={this.state.text}
                       style={styles.input}/>
              </Item>¬
            </Form>

          </View>
          <View style={styles.typesContainer}>
            {this.renderListOfTypes()}
            <View style={styles.typesContainer, {width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Button transparent onPress={() => {this.showAddForm()}}>
                <CustomIcon name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'} size={26} color={Colors.notActiveTab} />
              </Button>

            </View>
            {this.state.addForm ?
              <View style={{width: '100%'}}>
                <Form style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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
                style={{width: 200}}
                date={this.state.date}
                mode="datetime"
                placeholder="select date"
                format="YYYY-MM-DD"
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
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
              :
              null
          }

        </Content>
        <View>
          <Button onPress={() => {this.createTransaction()}} full success>
            <Text>Add transaction</Text>
          </Button>
          <Button full danger onPress={() => {this.props.navigation.navigate('TransactionsMain')}}>
            <Text>Cancel</Text>
          </Button>
        </View>
      </View>
    )
  }
}

