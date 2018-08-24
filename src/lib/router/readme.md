##  v4路由安装  react-router-dom

- 1.HashRouter 和 BrowerRouter

- 2.Route 路由组件  路由是从上到下匹配的，路径从左到右匹配，包含就是匹配, exact表示精确匹配，只有路径完全相等时才匹配
  <Route path="/" component={Home}>

- 3.Switch 组件 匹配一个路由后就停止，从上到下进行匹配
  只有当路径匹配成功才调用组件

- 4.Redirect 重定向组件
  <Redirect to="/">

- 5.404 页面也可以写成无路径，只有404页面,这种情况页面显示404，但是路径不会更改
  <Route component={Page404} />

- 6.Link 组件 to属性既可以接收字符串还可以接收对象
  <Link to="/user">    <Link to={{pathname: '/user'}}>

  NavLink 导航组件  会在当前匹配路由中添加 active 类名

- 7.子路由

- 8.编程式导航路由跳转
  a.所有通过路由渲染的组件属性都会有三个属性 history match location

  history: {
    go:
    push:(path, static)   state:状态，可以直接传值，页面刷新，状态丢失 在下一个页面的 this.props.location.state中获取
    pathname:
    replace:   会把当前history堆中的历史记录替换为当前
  }

  match: {
    params:    路径参数，正则匹配，匹配出来放入 this.props.match.params 中
  }

  this.props.history.go(-1) 只能返回一级导航？？？？？？？

  b.在不是通过路由渲染的组件中使用 路由： 使用  withRouter 高阶组件,把当前组件包装成一个路由组件
    export default withRouter(Component)

- 9.路径参数   /detail/1   /detail/2   Route 如果配置了路径参数，必须有参数才能进入路由（也只是开头匹配就进入  /detail/1/2也会进入）
  <Route path="/detail/:id" component={Detail}>

- 10.权限校验
  使用高阶组件进行优先判断，官方文档上的写法是不支持异步的

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

<Route path="/profile" component={Profile} />
{/* ProtectedRoute 组件中props 包含了 path component */}
<ProtectedRoute path="/user" component={User} />


