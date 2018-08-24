import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import './../views/style.scss'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      login: localStorage.getItem('login') ? true : false
    }
  }

  handleLoginOut = () => {
    localStorage.removeItem('login');
    this.setState({
      login: false
    })
  }

  render() {
    console.log(this.state.login)
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand" onClick={() => {
              this.props.history.push('/')
            }}>
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
            {this.state.login}
            {
              !this.state.login ? null : (
                <span className="navbar-brand" onClick={this.handleLoginOut}>
                  退出登录
                </span>
              )
            }
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav);
