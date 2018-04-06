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

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListDetail from '../src/Components/Containers/listDetail';
import ItemDetail from "../src/Components/Containers/itemDetail";
import FranchiseDetail from "../src/Components/Containers/franchiseDetail";


import PropTypes from "prop-types";
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore); 
// createStore(rootReducer);

// ReactDOM.render(
// <Provider store={createStoreWithMiddleware(rootReducer)}>
//     <App />
// </Provider>, 
// document.getElementById('root'));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
        <Switch>
            <Route path="/franchise/:id" component={FranchiseDetail} />
            <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById('root'));