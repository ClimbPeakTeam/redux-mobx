import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';

import ProtectedRoute from './protectedRoute';
import Home from './views/home';
import Profile from './views/profile';
import User from './views/user';
import Detail from './views/detail';
import Login from './views/login';

export default class Index extends Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} />
            {/* ProtectedRoute 组件中props 包含了 path component */}
            <ProtectedRoute path="/user" component={User} />
            <Route path="/detail/:id" component={Detail} exact />
            <Route path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </App>
      </Router>
    )
  }
}
