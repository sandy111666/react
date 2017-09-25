import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../fetch/detail/detai'

import ListComponent from '../../components/CommentList'
import LoadMore from '../../components/LoadMore'

import './style.less'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }

    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        )
    }

   componentDidMount(){
        this.loadFirstDate();
   }

 loadFirstDate(){
    const id=this.props.id;
//    const page=this.state.page;
    const result=getCommentData(0,id)
    this.resultHandle(result);
 }

 loadMoreData(){
    this.setState({isLoadingMore:true
    });
    const id=this.props.id;
    const page=this.state.page;
     const result=getCommentData(page,id)
      this.resultHandle(result);



 }
  

  resultHandle(result){

     result.then(res => {
            return res.json()
        }).then(json => {

            const page=this.state.page;
            const data=json.data

            this.setState({
                data:this.state.data.concat(data),
                hasMore:json.hasMore,
                page:page+1,
                isLoadingMore:false
            })


    
  })

    
    

  }

}
export default Comment