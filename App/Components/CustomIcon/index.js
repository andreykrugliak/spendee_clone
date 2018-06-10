import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react'


class CustomIcon extends Component {

  render () {
    return (
      <Icon
        name={this.props.name}
        size={this.props.size ? this.props.size : 14}
        color={this.props.color ? this.props.color : '#fff'} />
    )
  }
}

export default CustomIcon
