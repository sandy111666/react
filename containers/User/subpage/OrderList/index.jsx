import React from 'react'
import { getOrderListData } from '../../../../fetch/user/orderlist'

import OrderListComponent from '../../../../components/OrderList'

import {postComment} from '../../../../fetch/user/orderlist'

import './style.less'

class OrderList extends React.Component{

	constructor(props, context) {
        super(props, context);
       	   this.state={
       	   	data:[]
       	   }
       }

       render(){
       	return(<div className="order-list-container">
               
      <h1>您的订单{this.state.data.length}</h1>

                     {this.state.data.length
                    ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)} />
                    : <div>{/* loading */}</div>}

       		</div>)
       }


       componentDidMount(){

       	    const username=this.props.username

       	    if (username) {
            this.loadOrderList(username)
        }


       }


    loadOrderList(username) {
        const result = getOrderListData(username)
        result.then(res => {
            return res.json()
        }).then(json => {
            // 获取数据
            this.setState({
                data: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('用户主页“订单列表”获取数据报错, ', ex.message)
            }
        })
    }
      
    // 提交评价
    submitComment(id , value, star, callback) {
        const result = postComment(id, value, star)
        result.then(res => {
            return res.json()
        }).then(json => {
            if (json.errno === 0) {
                // 已经评价，修改状态
                callback()
            }
        })
    }




    submitComment(id , value, star, callback) {
        const result = postComment(id, value, star)
        result.then(res => {
            return res.json()
        }).then(json => {
            if (json.errno === 0) {
                // 已经评价，修改状态
                callback()
            }
        })
    }
}

export default OrderList