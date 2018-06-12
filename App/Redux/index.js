import { combineReducers } from 'redux';
import nav from './navigation/reducer';
import localData from './asyncStorage/reducer';

/* ------------- Assemble The Reducers ------------- */
const appReducer = combineReducers({
  nav, localData
})

const rootReducer = (state, action) => {
  let newState;
  if (action.type === 'RESET') {
    newState = undefined
  } else {
    newState = state
  }

  return appReducer(newState, action)
};

export default rootReducer
