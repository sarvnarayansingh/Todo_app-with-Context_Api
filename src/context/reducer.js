/* eslint-disable */
import {ADD_TODO,REMOVE_TODO} from '../context/actionConstant'

export default (state,action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state,action.payload];
    
        case REMOVE_TODO:
            return state.filter(data => data.id !== action.payload);
    
        default:
            return state
    }
};  