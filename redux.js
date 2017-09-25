import {createStore} from 'redux'

export default function(){
       
       function counter(state=0,action) {
        switch(action.type) {
            case 'increament': return state + 1;
            case 'descrease': return state -1;
            default:return state;
            


        }
       }

       let store=createStore(counter)

       store.subscribe(()=>{console.log(store.getState())})

       store.dispatch({type:'increament'})
       store.dispatch({type:'increament'})
       store.dispatch({type:'increament'})






}


