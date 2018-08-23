import React, { Component } from 'react';
import local from './local';

class Username extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.username} onChange={() => {}} />
      </div>
    )
  }
}

// 模拟connect
// 相当于vue的mixins 把公共逻辑提取到公共的父组件上
export default local('username')(Username)


