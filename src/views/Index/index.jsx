import React, { Component } from 'react';
import Counter from '@/components/counter';
import Todo from '@/components/todo';
import { inject, observer } from 'mobx-react';
import './index.scss'


@inject('commonState')
@observer
class Index extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
         <div>我是首页</div>
         <div>{this.props.commonState.getUserNameFromStore}</div>
         {/* <img className="imgSrc" src={require('./1.png')} alt=""/>
         <div className="BG"></div> */}
         <Counter />
         <Todo />
      </div>
    );
  }
}

export default Index;
