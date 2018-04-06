import axios from 'axios';

const LIST_API_DATA = './data.json';
const DETAIL_API_DATA = '../data.json';

const ITEM_API_DATA = './listing.json';
// const API_TEST = 'https://api.coinmarketcap.com/v1/ticker/?limit=20'

export const FETCH_LISTING = 'FETCH_LISTING';
export const FETCH_ITEM = 'FETCH_ITEM';

export function fetchListing(){
    const request = axios.get(LIST_API_DATA);
    // console.log('request from actions index.js',request)
    return {
        type: FETCH_LISTING,
        payload: request
    }
}

export function fetchItem(){
    const request = axios.get(ITEM_API_DATA);
    return {
        type: FETCH_ITEM,
        payload: request
    }
}



export function fetchDetail(){
    const request = axios.get(DETAIL_API_DATA);
    // console.log('request from actions index.js',request)
    return {
        type: FETCH_LISTING,
        payload: request
    }
}