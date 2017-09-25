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

       store.subscribe(console.log(state.getState()));

       store.dispath({type:"increament"})
       store.dispath({type:"increament"})
       store.dispath({type:"descrease"})









}


