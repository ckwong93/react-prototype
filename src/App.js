import React, { Component } from 'react';
import Test from './Components/test';
import Click from './Components/click';
import List from './Components/list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test />
        <br />
        <List />
        {/* <Click /> */}
      </div>
    );
  }
}
export default App;

