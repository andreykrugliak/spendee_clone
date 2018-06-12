import React, { Component } from 'react'
import { Platform, Text } from 'react-native'
import { Footer, FooterTab, Button, View } from 'native-base'

import CustomIcon from './../../Components/CustomIcon'
import { Colors, Metrics } from './../../Themes'

let styles = {
  footerWrapper: {
    borderColor: 'transparent',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  footerTabAndroidColor: {
    backgroundColor: 'white'
  },
  footerRound: {
    width: 83,
    height: 90,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 45,
    top: -10,
    zIndex: 0,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 2
  },
  footerTabWrapper: {
    backgroundColor: 'white',
    position: 'relative'
  },
  hideShadow: {
    position: 'absolute',
    backgroundColor: 'white',
    width: Metrics.screenWidth,
    height: 27,
    zIndex: 100,
    bottom: 0,
    left: 0
  },
  notActiveTab: {
    fontSize: 11,
    color: Colors.notActiveTab
  },
  tabStyleBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabStyleBtnCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.activeTab,
    padding: 5,
    height: 40,
    width: 40,
    borderRadius: 50
  },
  activeTab: {
    fontSize: 11,
    color: Colors.activeTab
  }

}

class TabNavigation extends Component {

  getTabIconByRouteName = (routeName) => {
    let active
    if (this.props.navigation.state.routes[this.props.navigation.state.index].routeName === routeName) {
      active = true
    }
    if (routeName === 'TransactionsTab') {
      return renderMainTab('list', 'Transactions')
    } else if (routeName === 'OverviewTab') {
      return renderMainTab('trending-up', 'Overview')
    } else if (routeName === 'AddTab') {
      return renderCenterTab('add', null)
    } else if (routeName === 'BudgetsTab') {
      return renderMainTab('cash', 'Budgets')
    } else if (routeName === 'SettingsTab') {
      return renderMainTab('cog', 'Settings')
    }
    function renderMainTab (iconName, tabName) {
      return (
        <View style={styles.tabStyleBtn}>
          <CustomIcon name={Platform.OS === 'ios' ? 'ios-' + iconName : 'md-' + iconName} size={26} color={active ? Colors.activeTab : Colors.notActiveTab} />
          <Text style={active ? styles.activeTab : styles.notActiveTab}>{tabName}</Text>
        </View>
      )
    }
    function renderCenterTab (iconName) {
      return (
        <View style={styles.tabStyleBtnCenter}>
          <CustomIcon name={Platform.OS === 'ios' ? 'ios-' + iconName : 'md-' + iconName} size={30} color={'white'} />
        </View>
      )
    }
  }


  goToTab (routeName) {
    const navigation = this.props.navigation
    setTimeout(() => {
      navigation.navigate(routeName)
    })
  }

  renderTabs () {
    let list = this.props.navigationState.routes.map((item, i) => {
      return (
        <Button key={i}
                onPress={this.goToTab.bind(this, item.routeName)}>
          {this.getTabIconByRouteName(item.routeName)}
        </Button>
      )
    })
    return (
      <FooterTab style={styles.footerTabAndroidColor}>
        {list}
      </FooterTab>
    )
  }

  render () {
    return (
      <Footer style={styles.footerWrapper}>

        <FooterTab style={styles.footerTabWrapper}>
          {this.renderTabs()}
        </FooterTab>
      </Footer>
    )
  }
}

export default TabNavigation
