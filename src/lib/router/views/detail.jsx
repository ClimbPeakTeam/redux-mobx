import React, { Component } from 'react';

export default class Detail extends Component {
  render() {
    let user = this.props.location.state;
    if(user == null) {
      let id = this.props.match.params.id;
      let users = JSON.parse(localStorage.getItem('users')) || [];
      user = users.find( item => item.id === Number(id) ) || {};
    }
    return (
      <div>
        id:{user.id},
        username:{user.username}
      </div>
    )
  }
}
