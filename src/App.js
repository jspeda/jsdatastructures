import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="welcome">welcome to javascript computer science</div>
      </div>
    );
  }
}

export default App;
