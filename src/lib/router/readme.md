##  v4路由安装  react-router-dom

- 1.HashRouter 和 BrowerRouter

- 2.Route 路由组件  路由是从上到下匹配的，路径从左到右匹配，包含就是匹配, exact表示精确匹配，只有路径完全相等时才匹配
  <Route path="/" component={Home}>

- 3.Switch 组件 匹配一个路由后就停止，从上到下进行匹配

- 4.Redirect 重定向组件
  <Redirect to="/">

- 5.404 页面也可以写成无路径，只有404页面,这种情况页面显示404，但是路径不会更改
  <Route component={Page404} />

- 6.Link 组件 to属性既可以接收字符串还可以接收对象
  <Link to="/user">    <Link to={{pathname: '/user'}}>

- 7.子路由

- 8.编程式导航路由跳转
  所有通过路由熏染的组件属性都会有三个属性 history match location

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

- 9.路径参数   /detail/1   /detail/2   Route 如果配置了路径参数，必须有参数才能进入路由（也只是开头匹配就进入  /detail/1/2也会进入）
  <Route path="/detail/:id" component={Detail}>
