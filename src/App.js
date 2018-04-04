import React, { Component } from 'react';
import ListDetail from './Components/Containers/listDetail';
import ItemDetail from './Components/Containers/itemDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListDetail />
        {/* <ItemDetail /> */}
      </div>
    );
  }
}
export default App;

