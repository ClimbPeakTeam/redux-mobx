import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from './heaser'

export default class App extends Component {
  // 设置子组件的上下文类型
  static childContextTypes = {
    col: PropTypes.string.isRequired
  }
  // 获取子组件的上下文
  getChildContext() {
    return {col: this.state.color};
  }

  constructor() {
    super()
    this.state = {
      color: 'aqua'
    }
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}
