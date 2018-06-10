import '../Config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import getStore from './../Redux/store'
// create our store

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
let store
class App extends Component {
  componentDidMount(){
    getStore().then(data => {
      store = data;
      this.setState({});

    });
  }

  render () {
    if(store){
      return (
        <Provider store={store}>
            <RootContainer />
        </Provider>
      )
    } else {
      return null;
    }
  }
}

export default App
