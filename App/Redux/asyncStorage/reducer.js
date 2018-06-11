import {AsyncStorage} from 'react-native'

const initialState = {
  transactionsData: [],
  transationsTypesExpense: [{
    id: 'food',
    title: 'Food & Drinks',
    iconName: 'pizza'
  },{
    id: 'transport',
    title: 'Transport',
    iconName: 'train'
  },{
    id: 'shopping',
    title: 'Shopping',
    iconName: 'pricetag'
  },{
    id: 'healthcare',
    title: 'Healthcare',
    iconName: 'medkit'
  }],
  transationsTypesIncome: [{
    id: 'salary',
    title: 'Salary',
    iconName: 'cash'
  },{
    id: 'gifts',
    title: 'Gifts',
    iconName: 'archive'
  }],
};

export default function localData(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_TRANSACTION': {
      if (action.payload) {
        let tempTransaction = state.transactionsData
        if(Array.isArray(tempTransaction)){
          tempTransaction.push(action.payload)
        }else{
          tempTransaction = [];
          tempTransaction.push(action.payload)
        }
        let newState = {
          ...state,
          transactionsData: tempTransaction
        };

        AsyncStorage.setItem('localList', JSON.stringify(newState));

        return newState;
      }
      return {};
    }
    case 'NEW_CATEGORY_EXP': {
      if (action.payload) {
        let tempTransaction = state.transationsTypesExpense
        if(Array.isArray(tempTransaction)){
          tempTransaction.push(action.payload)
        }else{
          tempTransaction = [];
          tempTransaction.push(action.payload)
        }
        let newState = {
          ...state,
          transationsTypesExpense: tempTransaction
        };

        AsyncStorage.setItem('localList', JSON.stringify(newState));

        return newState;
      }
      return {};
    }
    default:
      return state;
  }
}


