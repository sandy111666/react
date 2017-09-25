import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe';

import { Link } from 'react-router'
import './style.less'

class Category extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            index: 0
        }
    }

    render() {


        var opt={
        	auto:3000,
        	callback:function(index){
                   this.setState({index:index})
        	}.bind(this)
        }


        return (
            <div id="home-category">
              <ReactSwipe className="carousel" swipeOptions={opt}>
                 <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/jingdian"><li className="float-left jingdian"></li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/meishi"><li className="float-left gouwu"></li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/ribencai"><li className="float-left ribencai">日本菜</li></Link>
                        </ul>
                </div>
            </ReactSwipe>
            <div className="index-container">
            <ul>
                	<li className={this.state.index===0?'selected':''}></li>
                	<li className={this.state.index===1?'selected':''}></li>
                	<li className={this.state.index===2?'selected':''}></li>

                </ul>
            </div>
            </div>
        )
    }
}

export default Category