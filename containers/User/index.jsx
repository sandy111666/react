import React from 'react'
import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'


import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import ImagePickerExample from '../../components/ImagePicker'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            data:[]
        }

    }
    render() {
  const userinfo = this.props.userinfo

        return (
            <div>
                <Header title='用户中心页'/>
                <UserInfo city={userinfo.cityName} username={userinfo.username}/>
                <OrderList username={userinfo.username}/>
            </div>
        )
    }


        componentDidMount() {
        // 如果未登录，跳转到登录页面
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login')
        }
        
               
    

    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default User
// module.exports = User

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
       //  userinfoAction:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
