import React from 'react'
//import {getAdData} from '../../../fetch/home/home'
import { getAdData } from '../../fetch/home/home'
//import HomeAd from '../../../components/HomeAd/index'
import HomeAd from '../../components/HomeAd/index'

class Ad extends React.Component{

	constructor(props, context) {
        super(props, context);
       	   this.state={
       	   	data:[]
       	   }
       }

       render(){
       	return(<div>
                <HomeAd tina={this.state.data}/>

       		</div>)
       }


       componentDidMount(){
       	    const result = getAdData()
       	    console.log(result);
       	    result.then(res=>{ return res.json()}).then(json=>{
                 const tina=json;
                 if(tina.length)
                 {
                 	this.setState({data:tina})
                 }



       	    })


       }
      
}

export default Ad