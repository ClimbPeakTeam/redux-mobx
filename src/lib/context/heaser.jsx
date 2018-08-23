import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Title from './title'

export default class Header extends Component {
  static contextTypes = {
    col: PropTypes.string.isRequired
  }

  render() {
    return  (
      <div>
        下面字体的颜色是：{this.context.col}
        <Title />
      </div>
    )
  }
}
