// Provider 是一个组件，接受了一个store的属性，内部将其挂在了context上
import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {store: this.props.store}
  }

  render() {
    return this.props.children
  }
}

let connect = (mapStateToProps, mapDispatchProps) => (Component) => {
  return class Proxy extends React.Component {
    // constructor 的第二个参数是 context
    constructor(props, context) {
      super(props, context)
      this.state = mapStateToProps(this.context.store.getState())  // 返回的是store的状态
    }

    componentDidMount() {
      // dispath 后重新获取mapStateToProps
      this.context.store.subscribe( () => {
        this.setState(mapStateToProps(this.context.store.getState()))
      })
    }

    static contextTypes = {
      store: PropTypes.object
    }

    render() {
      console.log(this.context)
      return <Component
              {...this.state}
              {...mapDispatchProps(this.context.store.dispatch)}
             />
    }
  }
}

export {
  Provider,
  connect
}
