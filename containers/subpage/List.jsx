import React from 'react'
//import {getAdData} from '../../../fetch/home/home'
import { getListData } from '../../fetch/home/home'
//import HomeAd from '../../../components/HomeAd/index'
//import List as ListComponent from '../../components/List/index'
import ListCompoent from '../../components/List'
import LoadMore from '../../components/LoadMore'

import './style.less'



class List extends React.Component{

	constructor(props, context) {
        super(props, context);
       	    this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
       }

       render(){
       	return(<div>

       		    <h2 className="home-list-title">猜你喜欢</h2>
       		    {this.state.data.length?<ListCompoent data={this.state.data}/>:<div>数据加载中。。。。。。</div>}

              
              {this.state.hasMore?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.LoadMoreData.bind(this)}/>:''}

       		</div>)
       }


       componentDidMount(){

         this.loadFirstPage();
       	    
       	}



     loadFirstPage(){

       // let cityName='北京'this.props.cityName
       let cityName=this.props.cityName
       console.log(cityName);
        const result=getListData(cityName, 0);
        this.resultHandle(result)
        console.log('第一页'+this.state.data)

     }

     LoadMoreData(){

      this.setState({isLoadingMore:true})
     // let cityName='北京'
     let cityName=this.props.cityName
      const page=this.state.page
      const result=getListData(cityName, page);
      this.resultHandle(result)
      console.log(111)
      console.log(this.state.data)
      this.setState(
           {isLoadingMore:false,
            page:page+1
           }
        )


     }



        resultHandle(result){

                result.then(res=>{return res.json()}).then(json=>{
              const data=json.data;
              const hasMore = json.hasMore
                this.setState({hasMore:hasMore,
                data:this.state.data.concat(data)

        })
            })



        }


}


       	    



       
      


export default List