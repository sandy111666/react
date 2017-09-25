import React from 'react'
import Header from '../../components/Header'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'


import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'



class City extends React.Component{
       constructor(props,context){
       	   super(props,context);
       	   this.state={

       	   }
       }

       render(){
       	return(<div>
         <Header title='城市' />

 <CurrentCity cityName={this.props.userinfo.cityName} />
 <CityList changeFn={this.changCity.bind(this)} />

       		</div>)
       }

       componentDidMount(){



       }


       changCity(newCity){


            const userinfo=this.props.userinfo
            userinfo.cityName=newCity

            this.props.userInfoActions.update(userinfo)


            localStore.setItem(CITYNAME,newCity)

            hashHistory.push('/')


       }
      
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)