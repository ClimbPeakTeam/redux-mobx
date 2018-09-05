import React, { Component } from 'react';
import store from './store';
import action from './store/actions'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      number: store.getState().number
    }
  }

  componentDidMount() {
    store.subscribe( () => {
      this.setState({
        number: store.getState().number
      })
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          store.dispatch(action.add())
        }}>+</button>
        {this.state.number}
        <button onClick={() => {
          store.dispatch(action.minus())
        }}>-</button>
      </div>
    )
  }
}
