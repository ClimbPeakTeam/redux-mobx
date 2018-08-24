import React, { Component } from 'react';

export default class Login extends Component {

  handleLogin = () => {
    localStorage.setItem('login', 'isLogin');
    // 路径是这样的/login?redirect=/user 这时 this.props.location.search 是 ?redirect=/user
    let path = this.props.location.search.split('=')[1];
    this.props.history.push(path);
  }

  render() {
    console.log(this.props.location, this.props.match, this.props.history)
    return (
      <div>
        <button onClick={this.handleLogin}>点击登录</button>
      </div>
    )
  }
}
