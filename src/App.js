import React, { Component } from 'react';
import './App.css';

import CountdownTimer from './CountdownTimer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountdownTimer deadline="September 01 2017" />
      </div>
    );
  }
}

export default App;
