import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ProtectedRoute extends Component {

  componentWillMount() {
    let { path } = this.props;
    let flag = localStorage.getItem('login');
    if(!flag) {
      alert('请登录')
      // 没登录,跳转到登录页面
      this.props.history.push(`/login?redirect=${path}`);
    }
  }

  render() {
    let { path, component: Component } = this.props;
    console.log(Component)
    return <Component />
  }
}

export default withRouter(ProtectedRoute);
