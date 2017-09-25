import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="common-header">
            <span className="back-icon" onClick={this.handlerBack.bind(this)}>
            <i className="icon-chevron-left"></i>
            </span>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
    handlerBack(){
    	window.history.back();
    }
}

export default Header