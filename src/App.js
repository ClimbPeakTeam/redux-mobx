import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import Routers from '@/router';
import commonState from './store/common';

class App extends Component {
  render() {
    return (
      <Provider commonState={commonState}>
          <Routers />
      </Provider>
    );
  }
}

export default App;
