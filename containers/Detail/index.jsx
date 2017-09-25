import React from 'react'
import Header from '../../components/Header/index.jsx'

import Info from './Info'
import Comment from './Comment'
import Buy from './subpage/Buy'

class Detail extends React.Component{
       constructor(props,context){
       	   super(props,context);
       	   this.state={
       	   	title:'商品详情页'
       	   }
       }

       render(){

       	const id = this.props.params.id
       	console.log(this.props.params)
       	return(<div>
       		<Header title={this.state.title}/>
       		<Info id={id}/>
                  <Buy id={id}/>
            <Comment id={id}/>
            

            
       		</div>)
       }
      
}

export default Detail