import axios from 'axios';

const API_DATA = './data.json';
// const API_TEST = 'https://api.coinmarketcap.com/v1/ticker/?limit=20'

export const FETCH_LISTING = 'FETCH_LISTING';

export function fetchListing(){
    const request = axios.get(API_DATA);
    return {
        type: FETCH_LISTING,
        payload: request
    }
}