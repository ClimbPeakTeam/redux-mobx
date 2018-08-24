# 在redux中使用中间件
  applyMiddleware 是 redux 中的方法，可以帮助应用中间件
  createStore(); 第一个参数是reducer， 第二个是中间件  applyMiddleWare()
  可以使用多个中间件

## redux-logger 中间件  npm install redux-logger --save
1. import reduxLogger from 'redux-logger'
2. createStore(reducer, applyMiddleWare(reduxLogger));


## redux-thunk 中间件 用来实现redux异步处理   npm install redux-thunk --save
1. 可以令actionCreator返回一个函数，返回函数的第一个参数是dispatch，第二个参数是getState，在异步后可以自行执行一个dispatch

let action = {
  add(counter) {
    return function (dispatch, getState) {

    }
  }
}

## redux-promise 中间件 用来令 actionCreator 返回 promise
1. 可以再actionCreator中返回一个 promise ， 等待成功后将成功的结果派发出去, 如果失败，不执行dispath。

minus(amount) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve({type: Types.MINUS, amount});
    }, 3000)
  })
}

2. actionCreator 中如果返回一个对象，对象中有 payload, 而且payload是一个promise对象,也会执行promise，并且把成功或者失败都进行派发

divis(amount) {
  // return {type: Types.DIVIS, amount};
  return {
    type: Types.DIVIS,
    payload: new Promise( (resolve, reject) => {
      Math.random() > 0.5 ? resolve(amount*10) : reject(amount/10);
    })
  }
}

 同时，reducer中使用action.payoad来获取


 ### redux-tool
 1. compose 是 redux 的一个方法，用来合并中间件
 2. createStore(reducer, compose(applyMiddleware(reduxThunk, reduxPromise),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
    或者
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    createStore(reducer, composeEnhancers(
      applyMiddleware(reduxLogger, reduxThunk, reduxPromise)
    ))


