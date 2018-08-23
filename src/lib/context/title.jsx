import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static contextTypes = {
    col: PropTypes.string.isRequired
  }

  render() {
    return (
      <div style={{color: this.context.col}}>
        我是title组件
      </div>
    )
  }
}
