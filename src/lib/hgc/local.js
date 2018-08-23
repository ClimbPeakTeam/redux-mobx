import React, { Component } from 'react';

let local = (key) => (Com) =>  {
  return class HighOrderComponent extends Component{
    constructor() {
      super()
      this.state = {
        [key]: ''
      }
    }

    componentWillMount() {
      let val = localStorage.getItem(key);
      this.setState({
        [key]: val
      })
    }

    render() {
      return <Com {...this.state} />
    }
  }
}

export default local;
