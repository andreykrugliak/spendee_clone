import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import { loadState } from './asyncStorage/config'

import reducer from './index'
const NODE_ENV = process.env.NODE_ENV;

let middleware;
const middleware2 = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
if (NODE_ENV === 'development') {
  middleware = composeWithDevTools(applyMiddleware(middleware2, thunk))
} else {
  middleware = applyMiddleware(middleware2, thunk)

}

const getStore = () => {
  return loadState().then(data => {
    return createStore(reducer, data, middleware)
  });
};

export default getStore;

