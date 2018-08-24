import React, { Component } from 'react';

export default class Add extends Component {

  handClick = () => {
    if(!this.x.value) {
      alert('用户名不能为空');
    }
    let userList = JSON.parse(localStorage.getItem('users')) || [];
    userList.push({id: Math.random(), username: this.x.value });
    localStorage.setItem('users', JSON.stringify(userList));
    this.props.history.push('/user/list');
  }

  render() {
    return (
      <div>
        <input type="text" className="form-control" ref={(x) => this.x = x} />
        <button onClick={this.handClick}>添加用户</button>
      </div>
    )
  }
}
