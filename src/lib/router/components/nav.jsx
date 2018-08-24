import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">
              reac-router
            </span>
            <span className="navbar-brand">
            <Link to="/">首页</Link>
            </span>
            <span className="navbar-brand">
            <Link to="/profile">个人中心</Link>
            </span>
            <span className="navbar-brand">
            <Link to="/user">用户列表</Link>
            </span>
          </div>
        </div>
      </nav>
    )
  }
}
