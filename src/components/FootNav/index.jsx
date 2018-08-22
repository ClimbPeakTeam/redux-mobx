import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss'

class FootNav extends Component {
  render() {
    return (
      <div className="foot-nav">
        <NavLink exact to="/"  className="index">
          <div className="index-bg"></div>
          <p>首页</p>
        </NavLink>
        <NavLink to="/newsList"  className="news-list">
          <div className="news-list-bg"></div>
          <p>资讯</p>
        </NavLink>
        <NavLink to="/mine" className="mine">
          <div className="mine-bg"></div>
          <p>我的</p>
        </NavLink>
      </div>
    );
  }
}

export default FootNav;