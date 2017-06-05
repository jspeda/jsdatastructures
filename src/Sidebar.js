import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">JSCS</div>
        <div className="subtitle">javascript computer science</div>
        <div className="topics"></div>
      </div>
    )
  }
}

export default Sidebar;
