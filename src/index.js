import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore); 
// createStore(rootReducer);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
</Provider>, 
document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));