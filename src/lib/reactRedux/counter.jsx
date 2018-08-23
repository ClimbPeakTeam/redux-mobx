import React, { Component } from 'react';
import { connect } from './react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        我是计数器组件
        <p>{this.props.n}</p>
        <button onClick={ () => {
          this.props.add(1)
        }}>+</button>
      </div>
    )
  }
}


let mapStateToProps = (state) => {
  return {n: state.number}
}

let mapDispatchProps = (dispath) => {
  return {
    add: (count) => {
      dispath({type: 'ADD', count})
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Counter);
