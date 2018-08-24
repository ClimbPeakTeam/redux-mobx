import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

// export default createStore(reducer, applyMiddleware(reduxLogger, reduxThunk, reduxPromise));
// export default createStore(reducer, compose(applyMiddleware(reduxThunk, reduxPromise),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// ))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(
  applyMiddleware(reduxLogger, reduxThunk, reduxPromise)
))

