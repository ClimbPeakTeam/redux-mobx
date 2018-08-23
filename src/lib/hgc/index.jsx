import React, { Component } from 'react';
import Username from './userName';
import Password from './password';

export default class Hgc extends Component {
  componentWillMount() {
    localStorage.setItem('username', 'jason');
    localStorage.setItem('password', '123456aa')
  }
  componentWillUnmount() {
    localStorage.clear()
  }
  render() {
    return (
      <div>
        <Username />
        <Password />
      </div>
    )
  }
}
