import {FETCH_LISTING} from '../Actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_LISTING:
        console.log('Action received', action);
        return [action.payload.data, ...state];
        default:
        // console.log('defaulted message from reducer_listing');
    }
    return state;
}