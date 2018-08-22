import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './index.scss'

class HeadNav extends Component {
    constructor(props) {
        super();
        this.forBack = this.forBack.bind(this);
    }

    forBack() {
        console.log(this.props)
        this.props.history.go(-1);
    }

    render() {
        return (
            <div className="header-view">
                <div className="header clearfix">
                    <i className="fl" onClick={this.forBack}></i>
                    <h3 className="fl">我是标题</h3>
                </div>
                <div className="stance"></div>
            </div>
        )
    }
}

export default withRouter(HeadNav);