import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';

import Home from './views/home';
import Profile from './views/profile';
import User from './views/user';
import Detail from './views/detail';

export default class Index extends Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} />
            <Route path="/user" component={User} />
            <Route path="/detail/:id" component={Detail} exact />
            <Redirect to="/" />
          </Switch>
        </App>
      </Router>
    )
  }
}
