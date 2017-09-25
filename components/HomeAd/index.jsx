import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import img1 from "../../img/ab1.jpg";
import img2 from "../../img/ab2.jpg";
import img3 from "../../img/ab3.jpg";
import img4 from "../../img/lx1.jpg";
import img5 from "../../img/lx2.jpg";
import img6 from "../../img/lx3.jpg";

import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
                <div id="home-ad">
            
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {this.props.tina.map((item, index) => {
                        return <div key={index} className="ad-item float-left">
                            <a href={item.link} target="_blank">
                                <img src={item.img} alt={item.title}/>
                            </a>
                        </div>
                    })}
                </div>
            </div>

        )
    }

    componentDidMount(){
  
            console.log('111')
      //      console.log(this.props.tina)
    
}
}

export default HomeAd