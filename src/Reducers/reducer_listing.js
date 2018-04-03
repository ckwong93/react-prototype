import {FETCH_LISTING} from '../Actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_LISTING:
        console.log('Action received', action);
        return [action.payload.data, ...state];
        default:
        console.log('defaulted error message');
    }
    return state;
}