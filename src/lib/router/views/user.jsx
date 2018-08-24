import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Add from './../views/add';
import List from './../views/list';

export default class User extends Component {
  render() {
    return (
      <div>
        {/* 导航--二级路由 */}
        <div className="col-md-3">
          <nav className="nav nav-staked">
            <ul>
              <li><Link to={'/user/add'} >添加</Link></li>
              <li><Link to={'/user/list'} >列表</Link></li>
            </ul>
          </nav>
        </div>
        {/* 内容--二级路由 */}
        <div className="col-md-9">
          <Route exact path="/user/add" component={Add} />
          <Route path="/user/list" component={List} />
          <Redirect to="/user/add" />
        </div>
      </div>
    )
  }
}
