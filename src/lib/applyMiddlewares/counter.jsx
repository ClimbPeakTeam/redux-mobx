import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './store/action';

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={ () => {this.props.minus(1)}}>-</button>
        {this.props.n}
        <button onClick={ () => {this.props.add(1)}}>+</button>
        <br/>
        <button onClick={ () => {this.props.divis(1)}}>随机翻个倍</button>
      </div>
    )
  }
}

export default connect((state) => ({n:state.number}), actions)(Counter)
