import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../../fetch/detail/detai'

import ListComponent from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'

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

    render(){
        return({
            <div>
                {
                    this.state.data?
                    <ListComponent data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
                }
                {
                    this.state.hasMore?
                    <LoadMore isLoadingMore={this.state.isLoadingMore}  moreDateHandler={this.moreDateHandler.bind(this)}/>
                    :''

                }
            </div>
        })
    }

   componentDidMount(){
        this.loadFirstDate();
   }

 loadFirstDate(){
    const id=this.props.id;
    const result=getCommentData(id)
    this.resultHandler(result);
 }

 moreDateHandler(){
    this.setState({isLoadingMore:true,
        page:this.page+1
    });
    const id=this.props.id;
    const page=this.props.page;
     const result=getCommentData(id)
      this.resultHandler(result);


 }
  

  resultHandler(result){
            

    
  }

    
    }
}

export default Comment