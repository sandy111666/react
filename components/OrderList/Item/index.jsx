import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import Star from '../../Star'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            commentState:0,
            stars:{}
        }
    }
    render() {
        const data=this.props.data
        const scount=this.state.stars[data.id]

        return(
         <div className="clear-fix order-item-container">
             <div className="float-left order-item-img">
             <img src={data.img} alt={data.title} />
             </div>
      
             <div className="float-right order-item-comment">
             {
                this.state.commentState ===0 
               ?<button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                :  
                        this.state.commentState ===1 
                        ? ''
                        :  <button className='btn unseleted-btn'>已评价</button>

                
             }
             
             </div>
             <div className="order-item-content">
              <span>商店：{data.title}</span>
              <span>数量：{data.count}</span>
              <span>价格：￥{data.price}</span>
             </div>
             {

                this.state.commentState ===1?
                <div className="comment-text-container">

                <textarea style={{marginTop:'10px',width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                          

                        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
            

                 <Star star={scount?scount:0} clickCallback={this.starClickCallback.bind(this)}/>
                        </div>

                <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                 &nbsp;
                <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                </div>:''
             }

              </div>   )

    }

 componentDidMount() {
        // 将状态维护到 state 中

    }
    showComment() {
        // 显示输入框
        this.setState({
            commentState: 1
        })
    }
    submitComment() {
        // 获取操作函数
        const submitComment = this.props.submitComment
        // 获取id
        const id = this.props.data.id
        // 获取 star 数量
        const stars = this.state.stars
        const star = stars[id] || '0'
        // 获取评价内容
        const commentText = this.refs.commentText
        const value = commentText.value.trim()
        if (!value) {
            return
        }

        // 执行数据提交
        submitComment(id, value, star, this.commentOk.bind(this))
    }
    commentOk() {
        // 已经评价，修改状态
        this.setState({
            commentState: 2
        })
    }
    hideComment() {
        // 隐藏输入框
        this.setState({
            commentState: 0
        })

       
    }




    starClickCallback(star) {
        let stars = this.state.stars     
        const id = this.props.data.id
        stars[id] = star

        this.setState({
            stars: stars
        })          
        this.forceUpdate()
        
    }

}

export default Item
