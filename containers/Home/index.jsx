import React from 'react'
import HomeHeader from '../../components/HomeHeader/index.jsx'
import {connect} from 'react-redux'
import Category from '../../components/Category'
import Ad from '../subpage/Ad'
import List from '../subpage/List'
import TabBarExample from '../../components/TabBar'
import ImagePickerExample from '../../components/ImagePicker'




class Home extends React.Component{
       constructor(props,context){
       	   super(props,context);
       	   this.state={}
       }

       render(){

        
       	return(<div>
 
       		<HomeHeader cityName={this.props.userinfo.cityName}/>
       		<Category />
       		<Ad />
       		<List cityName={this.props.userinfo.cityName}/>
          <TabBarExample />
       		</div>)
       }
      
}



function mapStateToProps(state) {
    return {
    	userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
   
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
