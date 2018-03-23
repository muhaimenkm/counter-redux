import * as ActionTypes from './actionTypes';

export const increment = () =>({
    type: ActionTypes.COUNTER_INCREMENT
})

export const decrement = () =>({
    type: ActionTypes.COUNTER_DECREMENT
})
