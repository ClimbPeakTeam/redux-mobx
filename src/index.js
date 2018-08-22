import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/redux';
import App from './App'

import registerServiceWorker from './registerServiceWorker';
require('@/config/rem');
require('./styles/index.scss');


ReactDOM.render(<Provider store={store}>
  {/* <div>
    <Counter />
    <Todo />
  </div> */}
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
