import * as ActionTypes from '../actions/actionTypes';

let initialValue={count :0}

const CounterReducer =(state=initialValue,action) =>{
  switch(action.type){
    case ActionTypes.COUNTER_INCREMENT :
      return Object.assign({},state,{count : state.count+1});
    case  ActionTypes.COUNTER_DECREMENT :
      return Object.assign({},state,{count : state.count-1});
    default:
        return state;
  }
}

export default CounterReducer;
