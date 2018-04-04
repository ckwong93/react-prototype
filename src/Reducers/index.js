import { combineReducers } from 'redux';
import ListingReducer from './reducer_listing';

const rootReducer = combineReducers({
    listing: ListingReducer
});

export default rootReducer;
